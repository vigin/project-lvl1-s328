#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandom } from '../common';
import { playRoundGame } from '../gametemplate';
import { cons } from 'hexlet-pairs';

// возвращает случайное число от 1 до 20
const getNumber = () => getRandom(1, 20);

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

export const gameData = () => {
  const Number = getNumber();
  const question =`${Number}`;
  const rightAnswer = (Number % 2 === 0) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => playRoundGame(rules, gameData);
