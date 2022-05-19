import { useState, useEffect, useCallback } from 'react';

import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { getNetworkForMetamask, networkConfig } from '../config/network';
import { toHex } from '../utils/wallet';
import { CHAIN_ID } from '../config/constants';
import { Web3Provider } from '@ethersproject/providers';

export const networkOptions = Object.values(networkConfig);

const providerOptions = {
  // walletconnect: {
  //   package: WalletConnect, // required
  //   options: {
  //     infuraId: INFURA_ID, // required
  //   },
  // },
};

export const useWalletModal = () => {
  const hasWindow = typeof window !== 'undefined';
  const [web3Modal, setWeb3Modal] = useState<Web3Modal | undefined>();
  useEffect(() => {
    if (hasWindow) {
      setWeb3Modal(
        new Web3Modal({
          cacheProvider: true, // optional
          providerOptions, // required
        })
      );
    }
  }, [hasWindow]);

  return web3Modal;
};

export const useWalletConnect = () => {
  const [provider, setProvider] = useState<Web3Provider | undefined>();
  const [account, setAccount] = useState<string | undefined>();
  const [error, setError] = useState('');
  const [chainId, setChainId] = useState<number | undefined>();
  const [network, setNetwork] = useState<number>(CHAIN_ID);

  const web3Modal: Web3Modal | undefined = useWalletModal();

  const connectWallet = useCallback(async () => {
    if (web3Modal == null) {
      return;
    }
    try {
      const modalProvider = await web3Modal.connect();
      const web3provider = new ethers.providers.Web3Provider(modalProvider);

      const accounts = await web3provider.listAccounts();
      const providerNetwork = await web3provider.getNetwork();

      setProvider(web3provider);
      if (accounts) {
        setAccount(accounts[0]);
      }

      setChainId(providerNetwork.chainId);
    } catch (error) {
      setError('Error connecting to wallet.');
    }
  }, [web3Modal]);

  const switchNetwork = async (network?: number) => {
    try {
      if (network == null || provider == null || provider.provider == null) {
        return;
      }

      await provider?.provider?.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: toHex(network) }],
      });
      connectWallet();
    } catch (switchError) {
      if ((switchError as any).code === 4902) {
        try {
          await provider?.provider?.request({
            method: 'wallet_addEthereumChain',
            params: [getNetworkForMetamask(networkConfig[toHex(network)])],
          });
        } catch (error) {
          setError('Error switching wallet.');
        }
      }
    }
  };
  const refreshState = () => {
    setAccount('');
    setChainId(undefined);
    setNetwork(networkOptions?.[0].chainId);
  };
  const disconnect = useCallback(async () => {
    if (web3Modal == null) {
      return;
    }
    await web3Modal.clearCachedProvider();
    refreshState();
  }, [web3Modal]);

  useEffect(() => {
    if (provider == null || provider?.on == null) {
      return;
    }
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string) => {
        if (accounts) setAccount(accounts);
      };

      const handleChainChanged = (_hexChainId: number) => {
        setChainId(_hexChainId);
      };

      const handleDisconnect = () => {
        disconnect();
      };

      provider.on('accountsChanged', handleAccountsChanged);
      provider.on('chainChanged', handleChainChanged);
      provider.on('disconnect', handleDisconnect);

      return () => {
        if (provider == null || provider?.removeListener == null) {
          return;
        }
        provider.removeListener('accountsChanged', handleAccountsChanged);
        provider.removeListener('chainChanged', handleChainChanged);
        provider.removeListener('disconnect', handleDisconnect);
      };
    }
  }, [provider, disconnect, error]);

  useEffect(() => {
    if (web3Modal && web3Modal.cachedProvider) {
      connectWallet();
    }
  }, [web3Modal, connectWallet]);

  useEffect(() => {
    if (provider == null) {
      return;
    }
    if (chainId === CHAIN_ID) {
      return;
    }
    switchNetwork(CHAIN_ID);
  }, [provider]);

  return {
    provider,
    account,
    network,
    chainId,
    connectWallet,
    disconnect,
    switchNetwork,
    setNetwork,
    web3Modal,
  };
};
