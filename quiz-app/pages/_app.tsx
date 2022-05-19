import type { AppProps } from 'next/app';
import { wrapper } from '../store/store';
import { Typography } from 'antd';
import WalletContextProvider from '../components/WalletContext';
import '../config/firebase-config';
require('../styles/global.less');

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <WalletContextProvider>
        {/* @ts-ignore */}
        <Component {...pageProps}></Component>
      </WalletContextProvider>
      <Typography.Text
        code={true}
        style={{ position: 'fixed', bottom: 5, right: 5 }}
      >
        <a href=''>https://github.com/heypran</a>
      </Typography.Text>
    </>
  );
};
export default wrapper.withRedux(App);
