#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import { getRandom } from '../common';
import { playRoundGame } from '../gametemplate';

const getNumber = () => getRandom(1, 30);

const getGcd = (a, b) => {
  let r = 0;
  let n = a;
  let m = b;
  while (n !== 0) {
    r = m % n;
    m = n;
    n = r;
  }
  return m;
};

const rules = 'Find the greatest common divisor of given numbers.\n';

export const gameData = () => {
  const Number1 = getNumber();
  const Number2 = getNumber();
  const question = `${Number1} ${Number2}`;
  const rightAnswer = getGcd(Number1, Number2);
  return cons(question, rightAnswer.toString());
};

export default () => playRoundGame(rules, gameData);
