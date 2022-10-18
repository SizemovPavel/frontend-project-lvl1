import readlineSync from 'readline-sync';
import getName from './cli.js';

const runGame = (rules, getQuestionAndAnswer) => {
  const printName = getName();
  console.log(rules());
  let step = 1;
  const steps = 3;

  for (step; step <= steps; step += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();

    const answerUser = readlineSync.question(`Question: ${question} \n Your answer: `);

    if (`${correctAnswer}` === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${printName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${printName}!`);
};

export default runGame;
