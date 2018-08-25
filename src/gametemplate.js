import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const rounds = 3;

export const playRoundGame = (rules, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  console.log(); // пустая строка после описания
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
  for (let attempt = 0; attempt < rounds; attempt += 1) {
    const roundData = gameData();
    const question = car(roundData);
    const correctAnswer = cdr(roundData);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${gamerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${gamerName}!`);
};

export default playRoundGame;
