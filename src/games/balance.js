import { cons } from 'hexlet-pairs';
import getRandomNum from '../common';
import playRound from '../gametemplate';

const getBalance = (a) => {
  const b = a.toString();
  let s = 0;
  let r = '';
  for (let i = 0; i < b.length; i += 1) {
    s += Number(b[i]);
  }
  const m = s % b.length;
  const n = (s - (s % b.length)) / b.length;
  for (let i = 0; i < b.length; i += 1) {
    r += ((i < b.length - m) ? n : n + 1).toString();
  }
  return r;
};

const description = 'Balance the given number.\n';

const gameData = () => {
  const number = getRandomNum(1, 9999);
  const question = `${number}`;
  const rightAnswer = getBalance(number);
  return cons(question, rightAnswer.toString());
};

export default () => playRound(description, gameData);
