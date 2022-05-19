import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import { useWalletContext } from '../components/WalletContext';
import QuizApiService from '../services/quizApi';
import { IQuizAnswer } from '../types';
import { getQuizAppContract } from './contractHelpers';

export const useGetUserQuizAnswers = (
  user: string,
  quizContractId: string,
  chainId: number
): { userQuizAnswer: IQuizAnswer | undefined } => {
  const [userQuizAnswer, setUserQuizAnswer] = useState<
    IQuizAnswer | undefined
  >();

  useEffect(() => {
    if (user == null || quizContractId == null || chainId == null) {
      return;
    }

    (async () => {
      try {
        const userQuizAnswer =
          await QuizApiService.getInstance().getSubmittedQuizAnswer(
            user,
            quizContractId
          );
        console.log('userQuizAnswer.......', userQuizAnswer);
        setUserQuizAnswer(userQuizAnswer);
      } catch (e) {
        console.log('error', e);
      }
    })();
  }, [user, quizContractId, chainId]);

  return { userQuizAnswer };
};
