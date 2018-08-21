import { cons } from 'hexlet-pairs';
import getRandomNum from '../common';
import playRound from '../gametemplate';

const description = 'Answer "yes" if number even otherwise answer "no".\n';
const isEven = num => num % 2 === 0;

const gameData = () => {
  const number = getRandomNum(1, 20);
  const question = `${number}`;
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => playRound(description, gameData);
