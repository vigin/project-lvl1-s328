import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const rounds = 3;

export const playRoundGame = (rules, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const gamername = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamername}!`);
  for (let attempt = 0; attempt < rounds; attempt += 1) {
    const roundgameData = gameData();
    const question = car(roundgameData);
    const correctanswer = cdr(roundgameData);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctanswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctanswer}'.`);
      console.log(`Let's try again, ${gamername}!`);
      return;
    }
  }

  console.log(`Congratulations, ${gamername}!`);
};

export default playRoundGame;
