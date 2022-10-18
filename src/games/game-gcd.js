import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const rules = () => 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const numberOne = getRandomInt(0, 15);
  const numberTwo = getRandomInt(0, 30);
  const gcd = (x, y) => {
    if (x !== 0) {
      return gcd(y % x, x);
    }
    return y;
  };
  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = gcd(numberOne, numberTwo);
  return [question, correctAnswer];
};
export default () => runGame(rules, getQuestionAndAnswer);
