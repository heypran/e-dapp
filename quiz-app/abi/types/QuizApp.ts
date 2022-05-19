/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace QuizApp {
  export type QuizStruct = {
    quizId: BigNumberish;
    creator: string;
    cid: string;
    title: string;
    attemptedCount: BigNumberish;
    rewards: BigNumberish;
    created: BigNumberish;
    startTime: BigNumberish;
    endTime: BigNumberish;
    isActive: boolean;
    isEnded: boolean;
    answers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
  };

  export type QuizStructOutput = [
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    boolean,
    [number, number, number, number]
  ] & {
    quizId: BigNumber;
    creator: string;
    cid: string;
    title: string;
    attemptedCount: BigNumber;
    rewards: BigNumber;
    created: BigNumber;
    startTime: BigNumber;
    endTime: BigNumber;
    isActive: boolean;
    isEnded: boolean;
    answers: [number, number, number, number];
  };

  export type QuizSubmissionStruct = {
    quizId: BigNumberish;
    user: string;
    redeemedRewards: BigNumberish;
    submissionTime: BigNumberish;
    answers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
  };

  export type QuizSubmissionStructOutput = [
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    [number, number, number, number]
  ] & {
    quizId: BigNumber;
    user: string;
    redeemedRewards: BigNumber;
    submissionTime: BigNumber;
    answers: [number, number, number, number];
  };
}

export interface QuizAppInterface extends utils.Interface {
  contractName: "QuizApp";
  functions: {
    "QUIZ_LENGTH()": FunctionFragment;
    "QUIZ_REWARD_FACTOR()": FunctionFragment;
    "REWARD_PER_SCORE()": FunctionFragment;
    "REWARD_PER_SCORE_QUIZ_END()": FunctionFragment;
    "calculateRewards(address,uint256)": FunctionFragment;
    "calculateScore(address,uint256)": FunctionFragment;
    "calculateTotalScore(address)": FunctionFragment;
    "createQuiz(string,string)": FunctionFragment;
    "endQuiz(uint256,uint8[4])": FunctionFragment;
    "getAllQuizzes()": FunctionFragment;
    "getQuizByUser(address)": FunctionFragment;
    "getQuizDetails(uint256)": FunctionFragment;
    "getSubmittedAnswer(address,uint256)": FunctionFragment;
    "getSubmittedQuizAnswer(address,uint256)": FunctionFragment;
    "getUserAttemptedQuizIds(address)": FunctionFragment;
    "getUserQuizIds(address)": FunctionFragment;
    "quizIdMapping(uint256)": FunctionFragment;
    "quizSubmission(address,uint256,uint256)": FunctionFragment;
    "receive()": FunctionFragment;
    "redeemRewards(uint256)": FunctionFragment;
    "startQuiz(uint256,uint256,uint256)": FunctionFragment;
    "submitAnswers(uint256,uint8[4])": FunctionFragment;
    "submitAnswersPostQuizEnd(uint256,uint8[4])": FunctionFragment;
    "updateQuizDetails(uint256,string,string)": FunctionFragment;
    "userAttemptedQuizIds(address,uint256)": FunctionFragment;
    "userQuizIdMapping(address,uint256)": FunctionFragment;
    "userQuizSubmissionMapping(address,uint256)": FunctionFragment;
    "userRewards(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "QUIZ_LENGTH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "QUIZ_REWARD_FACTOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REWARD_PER_SCORE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REWARD_PER_SCORE_QUIZ_END",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateRewards",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateScore",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateTotalScore",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "createQuiz",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "endQuiz",
    values: [
      BigNumberish,
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllQuizzes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getQuizByUser",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getQuizDetails",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSubmittedAnswer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSubmittedQuizAnswer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserAttemptedQuizIds",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserQuizIds",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "quizIdMapping",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "quizSubmission",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "receive", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redeemRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startQuiz",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "submitAnswers",
    values: [
      BigNumberish,
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "submitAnswersPostQuizEnd",
    values: [
      BigNumberish,
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateQuizDetails",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "userAttemptedQuizIds",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userQuizIdMapping",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userQuizSubmissionMapping",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "userRewards", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "QUIZ_LENGTH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "QUIZ_REWARD_FACTOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REWARD_PER_SCORE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REWARD_PER_SCORE_QUIZ_END",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateScore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateTotalScore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createQuiz", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endQuiz", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllQuizzes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getQuizByUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getQuizDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubmittedAnswer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubmittedQuizAnswer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserAttemptedQuizIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserQuizIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quizIdMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quizSubmission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "receive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startQuiz", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "submitAnswers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitAnswersPostQuizEnd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateQuizDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userAttemptedQuizIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userQuizIdMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userQuizSubmissionMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userRewards",
    data: BytesLike
  ): Result;

  events: {
    "QuizAnswerSubmitted(uint256,address)": EventFragment;
    "QuizCreated(uint256,address,string)": EventFragment;
    "QuizEnded(uint256,address,string)": EventFragment;
    "QuizUpdated(uint256,address,string)": EventFragment;
    "RewardRedemption(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "QuizAnswerSubmitted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QuizCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QuizEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QuizUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardRedemption"): EventFragment;
}

export type QuizAnswerSubmittedEvent = TypedEvent<
  [BigNumber, string],
  { quizId: BigNumber; submittedBy: string }
>;

export type QuizAnswerSubmittedEventFilter =
  TypedEventFilter<QuizAnswerSubmittedEvent>;

export type QuizCreatedEvent = TypedEvent<
  [BigNumber, string, string],
  { quizId: BigNumber; createdBy: string; cid: string }
>;

export type QuizCreatedEventFilter = TypedEventFilter<QuizCreatedEvent>;

export type QuizEndedEvent = TypedEvent<
  [BigNumber, string, string],
  { quizId: BigNumber; createdBy: string; cid: string }
>;

export type QuizEndedEventFilter = TypedEventFilter<QuizEndedEvent>;

export type QuizUpdatedEvent = TypedEvent<
  [BigNumber, string, string],
  { quizId: BigNumber; createdBy: string; cid: string }
>;

export type QuizUpdatedEventFilter = TypedEventFilter<QuizUpdatedEvent>;

export type RewardRedemptionEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { user: string; quizId: BigNumber; rewards: BigNumber }
>;

export type RewardRedemptionEventFilter =
  TypedEventFilter<RewardRedemptionEvent>;

export interface QuizApp extends BaseContract {
  contractName: "QuizApp";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: QuizAppInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    QUIZ_LENGTH(overrides?: CallOverrides): Promise<[BigNumber]>;

    QUIZ_REWARD_FACTOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    REWARD_PER_SCORE(overrides?: CallOverrides): Promise<[BigNumber]>;

    REWARD_PER_SCORE_QUIZ_END(overrides?: CallOverrides): Promise<[BigNumber]>;

    calculateRewards(
      _user: string,
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateScore(
      _user: string,
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateTotalScore(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    createQuiz(
      _cid: string,
      _title: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endQuiz(
      _quizId: BigNumberish,
      _answers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAllQuizzes(
      overrides?: CallOverrides
    ): Promise<[QuizApp.QuizStructOutput[]]>;

    getQuizByUser(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[QuizApp.QuizStructOutput[]]>;

    getQuizDetails(
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[QuizApp.QuizStructOutput] & { quiz: QuizApp.QuizStructOutput }>;

    getSubmittedAnswer(
      _user: string,
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[[number, number, number, number]]>;

    getSubmittedQuizAnswer(
      _user: string,
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[QuizApp.QuizSubmissionStructOutput]>;

    getUserAttemptedQuizIds(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getUserQuizIds(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    quizIdMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean
      ] & {
        quizId: BigNumber;
        creator: string;
        cid: string;
        title: string;
        attemptedCount: BigNumber;
        rewards: BigNumber;
        created: BigNumber;
        startTime: BigNumber;
        endTime: BigNumber;
        isActive: boolean;
        isEnded: boolean;
      }
    >;

    quizSubmission(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    receive(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeemRewards(
      _quizId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startQuiz(
      _quizId: BigNumberish,
      _endTime: BigNumberish,
      _rewards: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    submitAnswers(
      _quizId: BigNumberish,
      _answers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    submitAnswersPostQuizEnd(
      _quizId: BigNumberish,
      _answers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateQuizDetails(
      _quizId: BigNumberish,
      _cid: string,
      _title: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userAttemptedQuizIds(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    userQuizIdMapping(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    userQuizSubmissionMapping(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber] & {
        quizId: BigNumber;
        user: string;
        redeemedRewards: BigNumber;
        submissionTime: BigNumber;
      }
    >;

    userRewards(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  QUIZ_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

  QUIZ_REWARD_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

  REWARD_PER_SCORE(overrides?: CallOverrides): Promise<BigNumber>;

  REWARD_PER_SCORE_QUIZ_END(overrides?: CallOverrides): Promise<BigNumber>;

  calculateRewards(
    _user: string,
    _quizId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateScore(
    _user: string,
    _quizId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateTotalScore(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  createQuiz(
    _cid: string,
    _title: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endQuiz(
    _quizId: BigNumberish,
    _answers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAllQuizzes(overrides?: CallOverrides): Promise<QuizApp.QuizStructOutput[]>;

  getQuizByUser(
    _user: string,
    overrides?: CallOverrides
  ): Promise<QuizApp.QuizStructOutput[]>;

  getQuizDetails(
    _quizId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<QuizApp.QuizStructOutput>;

  getSubmittedAnswer(
    _user: string,
    _quizId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[number, number, number, number]>;

  getSubmittedQuizAnswer(
    _user: string,
    _quizId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<QuizApp.QuizSubmissionStructOutput>;

  getUserAttemptedQuizIds(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getUserQuizIds(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  quizIdMapping(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      boolean
    ] & {
      quizId: BigNumber;
      creator: string;
      cid: string;
      title: string;
      attemptedCount: BigNumber;
      rewards: BigNumber;
      created: BigNumber;
      startTime: BigNumber;
      endTime: BigNumber;
      isActive: boolean;
      isEnded: boolean;
    }
  >;

  quizSubmission(
    arg0: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  receive(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeemRewards(
    _quizId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startQuiz(
    _quizId: BigNumberish,
    _endTime: BigNumberish,
    _rewards: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  submitAnswers(
    _quizId: BigNumberish,
    _answers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  submitAnswersPostQuizEnd(
    _quizId: BigNumberish,
    _answers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateQuizDetails(
    _quizId: BigNumberish,
    _cid: string,
    _title: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userAttemptedQuizIds(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  userQuizIdMapping(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  userQuizSubmissionMapping(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, BigNumber] & {
      quizId: BigNumber;
      user: string;
      redeemedRewards: BigNumber;
      submissionTime: BigNumber;
    }
  >;

  userRewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    QUIZ_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    QUIZ_REWARD_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

    REWARD_PER_SCORE(overrides?: CallOverrides): Promise<BigNumber>;

    REWARD_PER_SCORE_QUIZ_END(overrides?: CallOverrides): Promise<BigNumber>;

    calculateRewards(
      _user: string,
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateScore(
      _user: string,
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateTotalScore(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createQuiz(
      _cid: string,
      _title: string,
      overrides?: CallOverrides
    ): Promise<void>;

    endQuiz(
      _quizId: BigNumberish,
      _answers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<void>;

    getAllQuizzes(
      overrides?: CallOverrides
    ): Promise<QuizApp.QuizStructOutput[]>;

    getQuizByUser(
      _user: string,
      overrides?: CallOverrides
    ): Promise<QuizApp.QuizStructOutput[]>;

    getQuizDetails(
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<QuizApp.QuizStructOutput>;

    getSubmittedAnswer(
      _user: string,
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, number, number, number]>;

    getSubmittedQuizAnswer(
      _user: string,
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<QuizApp.QuizSubmissionStructOutput>;

    getUserAttemptedQuizIds(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getUserQuizIds(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    quizIdMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean
      ] & {
        quizId: BigNumber;
        creator: string;
        cid: string;
        title: string;
        attemptedCount: BigNumber;
        rewards: BigNumber;
        created: BigNumber;
        startTime: BigNumber;
        endTime: BigNumber;
        isActive: boolean;
        isEnded: boolean;
      }
    >;

    quizSubmission(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    receive(overrides?: CallOverrides): Promise<void>;

    redeemRewards(
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    startQuiz(
      _quizId: BigNumberish,
      _endTime: BigNumberish,
      _rewards: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    submitAnswers(
      _quizId: BigNumberish,
      _answers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<void>;

    submitAnswersPostQuizEnd(
      _quizId: BigNumberish,
      _answers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<void>;

    updateQuizDetails(
      _quizId: BigNumberish,
      _cid: string,
      _title: string,
      overrides?: CallOverrides
    ): Promise<void>;

    userAttemptedQuizIds(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userQuizIdMapping(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userQuizSubmissionMapping(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber] & {
        quizId: BigNumber;
        user: string;
        redeemedRewards: BigNumber;
        submissionTime: BigNumber;
      }
    >;

    userRewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "QuizAnswerSubmitted(uint256,address)"(
      quizId?: BigNumberish | null,
      submittedBy?: string | null
    ): QuizAnswerSubmittedEventFilter;
    QuizAnswerSubmitted(
      quizId?: BigNumberish | null,
      submittedBy?: string | null
    ): QuizAnswerSubmittedEventFilter;

    "QuizCreated(uint256,address,string)"(
      quizId?: BigNumberish | null,
      createdBy?: string | null,
      cid?: string | null
    ): QuizCreatedEventFilter;
    QuizCreated(
      quizId?: BigNumberish | null,
      createdBy?: string | null,
      cid?: string | null
    ): QuizCreatedEventFilter;

    "QuizEnded(uint256,address,string)"(
      quizId?: BigNumberish | null,
      createdBy?: string | null,
      cid?: string | null
    ): QuizEndedEventFilter;
    QuizEnded(
      quizId?: BigNumberish | null,
      createdBy?: string | null,
      cid?: string | null
    ): QuizEndedEventFilter;

    "QuizUpdated(uint256,address,string)"(
      quizId?: BigNumberish | null,
      createdBy?: string | null,
      cid?: string | null
    ): QuizUpdatedEventFilter;
    QuizUpdated(
      quizId?: BigNumberish | null,
      createdBy?: string | null,
      cid?: string | null
    ): QuizUpdatedEventFilter;

    "RewardRedemption(address,uint256,uint256)"(
      user?: string | null,
      quizId?: BigNumberish | null,
      rewards?: BigNumberish | null
    ): RewardRedemptionEventFilter;
    RewardRedemption(
      user?: string | null,
      quizId?: BigNumberish | null,
      rewards?: BigNumberish | null
    ): RewardRedemptionEventFilter;
  };

  estimateGas: {
    QUIZ_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    QUIZ_REWARD_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

    REWARD_PER_SCORE(overrides?: CallOverrides): Promise<BigNumber>;

    REWARD_PER_SCORE_QUIZ_END(overrides?: CallOverrides): Promise<BigNumber>;

    calculateRewards(
      _user: string,
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateScore(
      _user: string,
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateTotalScore(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createQuiz(
      _cid: string,
      _title: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endQuiz(
      _quizId: BigNumberish,
      _answers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAllQuizzes(overrides?: CallOverrides): Promise<BigNumber>;

    getQuizByUser(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    getQuizDetails(
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSubmittedAnswer(
      _user: string,
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSubmittedQuizAnswer(
      _user: string,
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserAttemptedQuizIds(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserQuizIds(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quizIdMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quizSubmission(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receive(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeemRewards(
      _quizId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startQuiz(
      _quizId: BigNumberish,
      _endTime: BigNumberish,
      _rewards: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    submitAnswers(
      _quizId: BigNumberish,
      _answers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    submitAnswersPostQuizEnd(
      _quizId: BigNumberish,
      _answers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateQuizDetails(
      _quizId: BigNumberish,
      _cid: string,
      _title: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userAttemptedQuizIds(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userQuizIdMapping(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userQuizSubmissionMapping(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userRewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    QUIZ_LENGTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    QUIZ_REWARD_FACTOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    REWARD_PER_SCORE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    REWARD_PER_SCORE_QUIZ_END(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateRewards(
      _user: string,
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateScore(
      _user: string,
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateTotalScore(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createQuiz(
      _cid: string,
      _title: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endQuiz(
      _quizId: BigNumberish,
      _answers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAllQuizzes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getQuizByUser(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getQuizDetails(
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSubmittedAnswer(
      _user: string,
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSubmittedQuizAnswer(
      _user: string,
      _quizId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserAttemptedQuizIds(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserQuizIds(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quizIdMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quizSubmission(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receive(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeemRewards(
      _quizId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startQuiz(
      _quizId: BigNumberish,
      _endTime: BigNumberish,
      _rewards: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    submitAnswers(
      _quizId: BigNumberish,
      _answers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    submitAnswersPostQuizEnd(
      _quizId: BigNumberish,
      _answers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateQuizDetails(
      _quizId: BigNumberish,
      _cid: string,
      _title: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userAttemptedQuizIds(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userQuizIdMapping(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userQuizSubmissionMapping(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userRewards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
