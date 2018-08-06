#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandom, getIntro } from './common';
import { car, cdr } from 'hexlet-pairs';

const rounds = 3;

export const playRoundGame = (rules, gameData) => {
  getIntro();
  console.log(rules);
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
  for (let attempt = 0; attempt < rounds; attempt += 1) {
    const roundgameData = gameData();
    console.log(`Question: ${car(roundgameData)}`);
    const Answer = readlineSync.question('Your answer: ');
    if (Answer === cdr(roundgameData)) {
      console.log('Correct!');
    } else {
      console.log(`'${Answer}' is wrong answer ;(. Correct answer was '${cdr(roundgameData)}'.`);
      console.log(`Let's try again, ${gamerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${gamerName}!`);
};

export default playRoundGame;
