import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const rules = () => 'What is the result of the expression?';

const getSum = (numberOne, numberTwo) => numberOne + numberTwo;
const getSubtraction = (numberOne, numberTwo) => numberOne - numberTwo;
const getMulti = (numberOne, numberTwo) => numberOne * numberTwo;

const getQuestionAndAnswer = () => {
  const numberOne = getRandomInt(1, 100);
  const numberTwo = getRandomInt(1, 10);

  const randomOperation = [
    [`${numberOne} + ${numberTwo}`, getSum],
    [`${numberOne} - ${numberTwo}`, getSubtraction],
    [`${numberOne} * ${numberTwo}`, getMulti],
  ];

  const randomIndex = Math.floor(Math.random() * randomOperation.length);
  const question = randomOperation[randomIndex][0];
  const correctAnswer = randomOperation[randomIndex][1](numberOne, numberTwo);

  return [question, correctAnswer];
};

export default () => runGame(rules, getQuestionAndAnswer);
