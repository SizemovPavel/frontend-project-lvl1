import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const rules = () => 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const firstElement = getRandomInt(1, 50);
  const progressionStep = getRandomInt(1, 10);
  const arr = [firstElement];
  const steps = getRandomInt(6, 12);
  let step = 1;
  for (step; step <= steps; step += 1) {
    arr[step] = arr[step - 1] + progressionStep;
  }
  const getRadnomElement = getRandomInt(2, steps - 1);
  const correctAnswer = arr[getRadnomElement];
  arr.splice(getRadnomElement, 1, '..');
  const question = arr.join(' ');
  return [question, correctAnswer];
};

export default () => runGame(rules, getQuestionAndAnswer);
