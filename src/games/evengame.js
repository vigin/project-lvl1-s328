#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import getRandomNum from '../common';
import playRound from '../gametemplate';


const description = 'Answer "yes" if number even otherwise answer "no".\n';

export const gameData = () => {
  const number = getRandomNum(1, 20);
  const question = `${number}`;
  const isEven = num => num % 2 === 0;
  const rightanswer = isEven(number) ? 'yes' : 'no';
  return cons(question, rightanswer);
};

export default () => playRound(description, gameData);
