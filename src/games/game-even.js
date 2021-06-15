import runGame from '../engine.js';
import getRandomInt from '../utilities.js';

const rules = () => 'Answer"yes" if number even oterwise answer "no"';
const getCorrectNumber = (number) => (number % 2 === 0 ? 'yes' : 'no');
const getQuestionAndAnswer = () => {
  const randomOne = getRandomInt(0, 100);
  const question = randomOne;
  const correctAnswer = getCorrectNumber(randomOne);
  return [question, correctAnswer];
};
export default () => runGame(rules, getQuestionAndAnswer);
