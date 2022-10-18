import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const rules = () => 'Answer "yes" if given number is prime. Otherwise answer "no"';

const getQuestionAndAnswer = () => {
  const randomNumber = getRandomInt(1, 100);
  const isPrime = () => {
    if (randomNumber <= 1) {
      return 'no';
    } if (randomNumber === 2) {
      return 'yes';
    }
    const sqrt = Math.sqrt(randomNumber);
    let step = 2;
    for (step; step <= sqrt; step += 1) {
      if (randomNumber % step === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const question = `${randomNumber}`;
  const correctAnswer = isPrime(randomNumber);
  return [question, correctAnswer];
};
export default () => runGame(rules, getQuestionAndAnswer);
