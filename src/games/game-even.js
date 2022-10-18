import getRandomInt from '../utilities.js';
import runGame from '../index.js';

const rules = () => 'Answer "yes" if the number is even, otherwise answer "no".';
const getCorrectNumber = (number) => (number % 2 === 0 ? 'yes' : 'no');
const getQuestionAndAnswer = () => {
  const randomOne = getRandomInt(0, 100);
  const question = randomOne;
  const correctAnswer = getCorrectNumber(randomOne);
  return [question, correctAnswer];
};

export default () => runGame(rules, getQuestionAndAnswer);
