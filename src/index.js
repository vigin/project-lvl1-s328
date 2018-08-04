#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const playFirstGame = () => {
  // приглашение в игру
  console.log('Welcome to the Brain Games!');

  // пустая строка
  console.log();

  // приветствие + правила
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
};

export default playFirstGame;
