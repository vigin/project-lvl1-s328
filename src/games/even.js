import { cons } from 'hexlet-pairs';
import getRandomNum from '../common';
import playGame from '../gametemplate';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

const gameData = () => {
  const number = getRandomNum(1, 20);
  const question = `${number}`;
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => playGame(description, gameData);
