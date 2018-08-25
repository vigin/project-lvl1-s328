import { cons } from 'hexlet-pairs';
import getRandomNum from '../common';
import playRound from '../gametemplate';

const getProgression = (a, b) => {
  let s = '';
  let p;
  let answer;
  for (let i = 0; i < 10; i += 1) {
    p = a + b * i;
    if (i === 5) {
      answer = p;
      p = '..';
    }
    s = `${s} ${p.toString()}`;
  }
  return [answer, s];
};

const description = 'What number is missing in this progression?';

const gameData = () => {
  const number1 = getRandomNum(1, 20);
  const number2 = getRandomNum(1, 20);
  const [rightAnswer, question] = getProgression(number1, number2);
  return cons(question, rightAnswer.toString());
};

export default () => playRound(description, gameData);
