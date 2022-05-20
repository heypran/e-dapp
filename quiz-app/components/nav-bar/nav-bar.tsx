import { FC, useEffect } from 'react';
import QuizCard from '../../components/quiz-card/quiz-card';
import { Button, Col, message, Row, Spin, Tooltip, Typography } from 'antd';
import QuizApiService from '../../services/quizApi';
import { IQuiz } from '../../types';
import Head from 'next/head';
import {
  HomeOutlined,
  EditFilled,
  UndoOutlined,
  DollarCircleFilled,
  DollarTwoTone,
  IdcardFilled,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import HomeWalletConnect from '../home-wallet-connect/home-wallet-connect';
import { useWalletContext } from '../WalletContext';
import { getQuizAppContract } from '../../hooks/contractHelpers';
import { connect } from 'react-redux';
import { QuizzesState } from '../../store/quizzes/reducer';
import { txConfirmedAction } from '../../store/quizzes/actions';
import { bindActionCreators } from 'redux';

interface MainProps {
  quizzesState: QuizzesState;

  txConfirmedAction(args: { isWaitingTxConfirmation: boolean }): void;
}

const NavBar: FC<MainProps> = ({
  quizzesState,
  txConfirmedAction,
}: MainProps) => {
  const router = useRouter();

  const handleReloadQuizzes = () => router.reload();
  const { account, chainId } = useWalletContext();
  useEffect(() => {
    if (account == null || chainId == null) {
      return;
    }

    const contract = getQuizAppContract(chainId);

    if (contract == null) {
      return;
    }
    contract.removeAllListeners();
    contract.on('QuizCreated', (quizId, createdBy, cid) => {
      if (createdBy === account && quizzesState.isWaitingTxConfirmation) {
        message.success('Quiz created, Transaction Confirmed!', 10);
        txConfirmedAction({ isWaitingTxConfirmation: false });
      }
    });
    contract.on('QuizUpdated', (quizId, createdBy, cid) => {
      if (createdBy === account && quizzesState.isWaitingTxConfirmation) {
        message.success('Quiz updated, Transaction Confirmed!', 10);
        txConfirmedAction({ isWaitingTxConfirmation: false });
      }
    });
    contract.on('QuizStarted', (quizId, createdBy, cid) => {
      if (createdBy === account && quizzesState.isWaitingTxConfirmation) {
        message.success('Quiz Started, Transaction Confirmed!', 10);
        txConfirmedAction({ isWaitingTxConfirmation: false });
      }
    });
    contract.on('QuizEnded', (quizId, createdBy, cid) => {
      if (createdBy === account && quizzesState.isWaitingTxConfirmation) {
        message.success('Quiz ended, Transaction Confirmed!', 10);
        txConfirmedAction({ isWaitingTxConfirmation: false });
      }
    });
    contract.on('QuizAnswerSubmitted', (quizId, submittedBy) => {
      if (submittedBy === account && quizzesState.isWaitingTxConfirmation) {
        message.success('Quiz answers submitted, Transaction Confirmed!', 10);
        txConfirmedAction({ isWaitingTxConfirmation: false });
      }
    });
    contract.on('RewardRedemption', (user, quizId, rewards) => {
      if (user === account && quizzesState.isWaitingTxConfirmation) {
        message.success('Reward Redemption Transaction Confirmed!', 10);
        txConfirmedAction({ isWaitingTxConfirmation: false });
      }
    });
    return () => {
      contract.removeAllListeners();
    };
  }, []);

  return (
    <Row justify={'space-between'} style={{ width: '100%' }}>
      <Col>
        <Row gutter={[8, 8]}>
          <Col>
            <Tooltip title={'home'}>
              <Button
                icon={<HomeOutlined style={{ fontSize: '24px' }} />}
                type={'text'}
                onClick={() => router.push('/')}
              />
            </Tooltip>
          </Col>
          <Col>
            <Tooltip title={'my quizzes'}>
              <Button
                icon={<IdcardFilled style={{ fontSize: '24px' }} />}
                type={'text'}
                onClick={() => router.push('/my-quizzes')}
              />
            </Tooltip>
          </Col>
          <Col>
            <Tooltip title={'learn to earn'}>
              <Button
                icon={<DollarCircleFilled style={{ fontSize: '24px' }} />}
                type={'text'}
                onClick={() => router.push('/quizzes')}
              />
            </Tooltip>
          </Col>

          <Col>
            <Tooltip title={'create new quiz'}>
              <Button
                icon={<EditFilled style={{ fontSize: '24px' }} />}
                type={'text'}
                onClick={() => router.push('/create-quiz')}
              />
            </Tooltip>
          </Col>

          <Col>
            <Tooltip title={'reload'}>
              <Button
                icon={<UndoOutlined style={{ fontSize: '24px' }} />}
                onClick={handleReloadQuizzes}
                type={'text'}
              />
            </Tooltip>
          </Col>
        </Row>
      </Col>

      <Col>
        <Row>
          {quizzesState.isWaitingTxConfirmation && (
            <Typography.Title level={5} style={{ marginRight: '16px' }}>
              <Spin />
              Confirming Tx...
            </Typography.Title>
          )}
          <HomeWalletConnect />
        </Row>
        {/* <Row>
          <Col>
            <Button
              icon={<DollarTwoTone />}
              onClick={handleReloadQuizzes}
              type={'ghost'}
              style={{ marginRight: '24px' }}
            >
              Redeem Rewards
            </Button>
            <Typography.Title
              level={4}
              style={{ textAlign: 'center' }}
              className={'controls-text'}
            >
              0.2 Matic
            </Typography.Title>
          </Col>
          <HomeWalletConnect />
        </Row> */}
      </Col>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => ({
  txConfirmedAction: bindActionCreators(txConfirmedAction, dispatch),
});

const mapStateToProps = (state) => ({
  quizzesState: state.quizzesReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

// export default NavBar;
