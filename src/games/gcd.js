import { cons } from 'hexlet-pairs';
import getRandomNum from '../common';
import playRound from '../gametemplate';

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

const description = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const number1 = getRandomNum(1, 30);
  const number2 = getRandomNum(1, 30);
  const question = `${number1} ${number2}`;
  const rightAnswer = getGcd(number1, number2);
  return cons(question, rightAnswer.toString());
};

export default () => playRound(description, gameData);
