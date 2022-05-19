import { FC, useEffect } from 'react';
import { Button, Col, message, Row, Typography } from 'antd';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { QuizzesState } from '../../store/quizzes/reducer';
import { useWalletContext } from '../WalletContext';
import { truncateAddress } from '../../utils/wallet';
import { bindActionCreators } from 'redux';
import { createPlayer } from '../../store/quizzes/actions';
import { ethers } from 'ethers';

interface WalletConnectComponentProps {
  createPlayer(args: { name: string; surname: number }): void;
}

const WalletConnectComponent: FC<WalletConnectComponentProps> = (props) => {
  const { createPlayer } = props;

  const router = useRouter();
  const { connectWallet, account, chainId, disconnect, provider } =
    useWalletContext();

  useEffect(() => {
    setWallet();
  }, [chainId, account]);

  const setWallet = async () => {
    if (chainId == null || account == null) {
      return;
    }
    console.log(
      ethers.BigNumber.from(
        await provider.getBalance('0x4DE2B5064625b28A3a1de1f525A8DD91BB1c433e')
      ).toString(),
      ' balance of contract' //1991.4737 0.035979
    );

    await createPlayer({
      surname: chainId,
      name: truncateAddress(account ?? ' '),
    });
  };
  return (
    <Col>
      <Button type='primary' onClick={account ? disconnect : connectWallet}>
        {account ? `Disconnect` : `Connect`}
      </Button>

      {account && (
        <Typography.Title
          level={4}
          style={{ textAlign: 'center' }}
          className={'controls-text'}
        >
          <Typography.Text code={true}>
            {truncateAddress(account)}
          </Typography.Text>
        </Typography.Title>
      )}
    </Col>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createPlayer: bindActionCreators(createPlayer, dispatch),
});

const mapStateToProps = (state) => ({
  quizzes: state.quizzesReducer,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletConnectComponent);
