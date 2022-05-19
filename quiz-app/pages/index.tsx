import type { NextPage } from 'next';
import Head from 'next/head';
import { Button, Col, Row, Typography } from 'antd';
import { HomeActionCard } from '../components';
import { useWalletContext } from '../components/WalletContext';
import WalletConnectComponent from '../components/home-wallet-connect/home-wallet-connect';

require('../styles/home-page.less');

const Home: NextPage = () => {
  // const { account } = useWalletContext();
  return (
    <>
      <Head>
        <title>quiz-app</title>
        <meta property='og:title' content='quiz-app' key='title' />
      </Head>
      <Row justify={'end'} style={{ marginTop: 24, marginInlineEnd: 48 }}>
        <WalletConnectComponent />
      </Row>
      <Row justify={'center'} align={'middle'} style={{ height: '100%' }}>
        <Row gutter={[8, 8]}>
          <Col xs={24} lg={8}>
            <HomeActionCard
              name={'My Quizzes 🚀'}
              number={''}
              path={'/my-quizzes'}
            />
          </Col>
          <Col xs={24} lg={8}>
            <HomeActionCard name={'Learn & 👀'} number={''} path={'/quizzes'} />
          </Col>
          <Col xs={24} lg={8}>
            <HomeActionCard
              name={'Create new quiz 👽'}
              number={''}
              path={'/create-quiz'}
              requireUser={true}
            />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Home;
