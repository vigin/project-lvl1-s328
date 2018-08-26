import { cons } from 'hexlet-pairs';
import getRandomNum from '../common';
import playGame from '../gametemplate';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Is this number prime?';

const gameData = () => {
  const number = getRandomNum(1, 20);
  const question = `${description} ${number}`;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => playGame(description, gameData);
