import readlineSync from 'readline-sync';

export const userName = () => {
  console.log('Welcome to the Brain Games!');
  return readlineSync.question('May I have your name? ');
};

const runGame = (rules, getQuestionAndAnswer) => {
  const printName = userName();
  console.log(rules());
  let step = 1;
  const steps = 3;

  for (step; step <= steps; step += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();

    const answerUser = readlineSync.question(`Qustion: ${question} \n Your answer: `);

    if (`${correctAnswer}` === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${printName}!`);
      return;
    }
  }
  console.log(`Congratulation, ${printName}!`);
};
export default runGame;
