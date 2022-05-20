### Learn To Earn Dapp

Project Description: Learn to Earn Dapp.

User can create quiz, attempt quizzes and earn tokens for correct answers.

Team:
Github: @heypran

Technologies Used:

Smart Contract deployed on Polygon for low transaction fees.

Uses IPFS to store quiz details, such as questions, options, titles etc. Later option to save notes and discussion threads will be added.

Frontend built using Antd framework, NextJs, React and Typescript.

[Demo](https://youtu.be/NDrfNlxj5Wc)

[Website](https://quiz-dapp.web.app)

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

Note: you can provide your own contract address in `quiz-dapp/config/constants` and abi in `quiz-dapp/abi`
