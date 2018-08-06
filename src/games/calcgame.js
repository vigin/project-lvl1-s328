#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import { getRandom } from '../common';
import { playRoundGame } from '../gametemplate';

const getNumber = () => getRandom(1, 20);

const rules = 'Find the greatest common divisor of given numbers.\n';

export const gameData = () => {
  const Number1 = getNumber();
  const Number2 = getNumber();
  let question;
  let rightAnswer;
  switch (getRandom(1, 3)) {
    case 1:
      question = `${Number1} + ${Number2}`;
      rightAnswer = Number1 + Number2;
      break;
    case 2:
      question = `${Number1} - ${Number2}`;
      rightAnswer = Number1 - Number2;
      break;
    case 3:
      question = `${Number1} * ${Number2}`;
      rightAnswer = Number1 * Number2;
      break;
    default:
  }
  return cons(question, rightAnswer.toString());
};

export default () => playRoundGame(rules, gameData);
