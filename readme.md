### Learn To Earn Quiz Dapp

![](https://i.imgur.com/waxVImv.png)

##### Project Description:

Learn to Earn Dapp.
User can create quiz, attempt quizzes and earn tokens for correct answers.

Team:

- Github: @heypran

##### Technologies Used:

Smart Contract deployed on blockchain.

Uses IPFS to store quiz details ( web3 storage), such as questions, options, titles etc. Later option to save notes and discussion threads will be added. Refer files `quiz-app/services/quizApi` and functions such as `createQuiz` , `getQuizByCid`.

Frontend built using Antd framework, NextJs, React and Typescript.

[Full Demo](https://youtu.be/PRhfjA5xzLs)

[IPFS Usage Demo](https://youtu.be/nIAMJQLiEKQ)

[Website](https://quiz-dapp.web.app)

![](https://i.imgur.com/waxVImv.png)

### How to Run

```
 git clone <repo>
```

#### Smart Contract

```
cd backend
yarn
yarn compile
yarn deploy:quizapp --network testnet
```

Note: you will need to provide a private key deployment refer `backend/private.example.json`

#### Frontend

```
cd quiz-app
yarn
yarn dev
```

Note: you can provide your own contract address in `quiz-app/config/constants` and abi in `quiz-app/abi`

[IPFS Usage Demo](https://youtu.be/nIAMJQLiEKQ)
