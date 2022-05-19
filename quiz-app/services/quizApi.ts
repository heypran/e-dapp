import {
  IQuestionApiResponse,
  IQuiz,
  IQuizAnswer,
  ISubmitQuestionBody,
  ISubmitQuestionResponse,
  IUser,
} from '../types';
import qs from 'qs';
import { Web3Storage } from 'web3.storage';
import { message } from 'antd';
import { dummuQuiz, dummyQuizzes } from './dummyData';
import { getQuizAppContract } from '../hooks/contractHelpers';
import { CHAIN_ID } from '../config/constants';
import { ethers } from 'ethers';

export default class QuizApiService {
  private static instance: QuizApiService;
  // TODO: move to .env
  private quizApiBaseUrl = 'https://pure-caverns-82881.herokuapp.com/api';
  private developerKey =
    '15b50095c9a5d0d8787ae19f03c5db840428997fa1e220d22900762362cffdf4';
  private developerSecret =
    '9f2da0e705273f49b622258dbb529061453f0cc30f9f851fdfa3c824c69d1197';

  private constructor() {}

  public static getInstance(): QuizApiService {
    if (!QuizApiService.instance) {
      QuizApiService.instance = new QuizApiService();
    }
    return QuizApiService.instance;
  }

  private getAccessToken = async (): Promise<string> => {
    const response = await fetch(
      `${this.quizApiBaseUrl}/developers/v72/tokens`,
      {
        method: 'POST',
        headers: {
          'X-Developer-Key': this.developerKey,
          'X-Developer-Secret': this.developerSecret,
        },
      }
    ).then((res) => res.json());
    return response.token;
  };

  public createPlayer = async (body): Promise<IUser> => {
    const token = await this.getAccessToken();
    return await fetch(`${this.quizApiBaseUrl}/v54/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': token,
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  };

  public getAllQuizzes = async (): Promise<IQuiz[]> => {
    const token = await this.getAccessToken();
    return await fetch(`${this.quizApiBaseUrl}/v54/quizzes`, {
      headers: { 'X-Access-Token': token },
    }).then((res) => res.json());
  };

  public getQuizById = async (
    quizId: string,
    user_id?: string
  ): Promise<IQuestionApiResponse> => {
    const token = await this.getAccessToken();
    const url = `${this.quizApiBaseUrl}/v54/quizzes/${quizId}?${qs.stringify({
      user_id,
    })}`;
    return await fetch(url, {
      headers: { 'X-Access-Token': token },
    }).then((res) => res.json());
  };

  public getAllQuizzesByCid = async (): Promise<IQuiz[]> => {
    const quizAppContract = getQuizAppContract(CHAIN_ID);
    const allQuizzes = await quizAppContract.getAllQuizzes();
    const formattedQuizzes = allQuizzes.map((quiz) => this.formatQuiz(quiz));
    return formattedQuizzes;
  };

  public getAllQuizzesByUser = async (
    userAddress: string
  ): Promise<IQuiz[]> => {
    const quizAppContract = getQuizAppContract(CHAIN_ID);
    const quizzes = await quizAppContract.getQuizByUser(userAddress);

    const spred = quizzes.map((quiz) => {
      return this.formatQuiz(quiz);
    });

    return spred;
  };

  public getUserQuizIds = async (userAddress: string): Promise<number[]> => {
    const quizAppContract = getQuizAppContract(CHAIN_ID);

    try {
      const quizIds = await quizAppContract.getUserQuizIds(userAddress);

      return quizIds.map((n) => ethers.BigNumber.from(n).toNumber());
    } catch (e) {
      console.log('err:', e);
    }

    return [];
  };

  public getUserAttemptedQuizIds = async (
    userAddress: string
  ): Promise<number[]> => {
    const quizAppContract = getQuizAppContract(CHAIN_ID);

    try {
      const quizIds = await quizAppContract.getUserAttemptedQuizIds(
        userAddress
      );

      return quizIds.map((n) => ethers.BigNumber.from(n).toNumber());
    } catch (e) {
      console.log('err:', e);
    }

    return [];
  };

  public getContractQuizById = async (quizId: string): Promise<IQuiz> => {
    const quizAppContract = getQuizAppContract(CHAIN_ID);
    const quizzes = await quizAppContract.getQuizDetails(quizId);

    return this.formatQuiz(quizzes);
  };

  // deprecate
  public getSubmittedAnswer = async (
    userAddress: string,
    quizId: string
  ): Promise<number[]> => {
    const quizAppContract = getQuizAppContract(CHAIN_ID);
    try {
      const answersArray = await quizAppContract.getSubmittedAnswer(
        userAddress,
        quizId
      );

      return answersArray;
    } catch (e) {}

    return [];
  };

  public getSubmittedQuizAnswer = async (
    userAddress: string,
    quizId: string
  ): Promise<IQuizAnswer | undefined> => {
    const quizAppContract = getQuizAppContract(CHAIN_ID);
    try {
      const quizAnswer = await quizAppContract.getSubmittedQuizAnswer(
        userAddress,
        quizId
      );

      return {
        quizId: ethers.BigNumber.from(quizAnswer.quizId).toNumber(),
        user: quizAnswer.user,
        redeemedRewards: ethers.BigNumber.from(
          quizAnswer.redeemedRewards
        ).toNumber(),
        submissionTime: ethers.BigNumber.from(
          quizAnswer.submissionTime
        ).toNumber(),
        answers: quizAnswer.answers,
      };
    } catch (e) {}
  };

  public getQuizByCid = async (
    quizCid: string
  ): Promise<IQuestionApiResponse> => {
    const client = this.makeStorageClient();
    const resp = await client.get(quizCid);
    if (!resp?.ok) {
      throw new Error(`Falied to get ${quizCid}`);
    }
    const files = await resp.files();
    return JSON.parse(await files[0].text())?.['data'];
  };

  public submitQuizQuestion = async (
    quizId: string,
    body: ISubmitQuestionBody
  ): Promise<ISubmitQuestionResponse> => {
    const token = await this.getAccessToken();
    const url = `${this.quizApiBaseUrl}/v54/quizzes/${quizId}/submit`;
    const quizApiResponse = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': token,
      },
    }).then((res) => res.json());

    if (quizApiResponse.message?.length) {
      return { error: quizApiResponse.message[0] };
    }
    return quizApiResponse;
  };

  public createQuiz = async (payload: any): Promise<string> => {
    // const token = this.getStorageToken();
    // await this.getAccessToken();
    const client = this.makeStorageClient();

    const cid = await client.put(this.makeFileObject(payload), {
      onRootCidReady: (localCid) => {
        message.info(`> 🔑 locally calculated Content ID: ${localCid} `);
        message.info('> 📡 sending files to web3.storage ');
      },
      onStoredChunk: (bytes) =>
        message.info(
          `> 🛰 sent ${bytes.toLocaleString()} bytes to web3.storage`
        ),
    });

    message.info(`> ✅ web3.storage now hosting ${cid}`);
    message.info(`https://dweb.link/ipfs/${cid}`);
    console.log(`cid`, cid);
    // const url = `${this.quizApiBaseUrl}/v54/quizzes`;
    // const quizApiResponse = await fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify(payload),
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'X-Access-Token': token,
    //   },
    // }).then((res) => res.json());

    // if (quizApiResponse.message?.length) {
    //   return { error: quizApiResponse.message[0] };
    // }
    return cid;
  };

  private makeFileObject = (payload: any, filename?: string): File[] => {
    const obj = payload;
    const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' });

    const files = [new File([blob], filename ?? 'qap1.json')];
    return files;
  };
  private makeStorageClient = (): Web3Storage => {
    return new Web3Storage({ token: this.getStorageToken() });
  };
  private getStorageToken = (): string => {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEFGMDlGZTAzMUM5RTZiNmEyNUIzYjE1RkMxOEZFODY1ZGQ1MjgxZjQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTE5NTYwMTYxNTUsIm5hbWUiOiJxYXAxIn0.KvoSD_WJOtO1IHg-CA32IEL3ZEpssiM3UV9GsK3KPcE';
  };

  private formatQuiz = (quiz): IQuiz => {
    const rewards =
      ethers.BigNumber.from(quiz.rewards).toString() == '0'
        ? 0
        : Number(ethers.utils.formatEther(quiz.rewards));

    return {
      title: quiz.title,
      creator: quiz.creator,
      attemptedCount: ethers.BigNumber.from(quiz.attemptedCount).toNumber(),
      rewards: rewards,
      quizCid: quiz.cid,
      quizId: ethers.BigNumber.from(quiz.quizId).toString(),
      created: ethers.BigNumber.from(quiz.created).toNumber(),
      startTime: ethers.BigNumber.from(quiz.startTime).toNumber(),
      endTime: ethers.BigNumber.from(quiz.endTime).toNumber(),
      isActive: quiz.isActive,
      isEnded: quiz.isEnded,
      answers: quiz.answers,
    };
  };
}
