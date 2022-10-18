import readlineSync from 'readline-sync';
import getName from '../src/cli.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const runGame = (rules, getQuestionAndAnswer) => {
  const printName = getName();
  console.log(rules());
  let step = 1;
  const steps = 3;

  for (step; step <= steps; step += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();

    const answerUser = readlineSync.question(`Qustion: ${question} \n Your answer: `);

    if (`${correctAnswer}` === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${printName}!`);
      return;
    }
  }
  console.log(`Congratulation, ${printName}!`);
};

const rules = () => 'Answer"yes" if number even oterwise answer "no"';
const getCorrectNumber = (number) => (number % 2 === 0 ? 'yes' : 'no');
const getQuestionAndAnswer = () => {
  const randomOne = getRandomInt(0, 100);
  const question = randomOne;
  const correctAnswer = getCorrectNumber(randomOne);
  return [question, correctAnswer];
};

runGame(rules, getQuestionAndAnswer);
