import { cons } from 'hexlet-pairs';
import getRandomNum from '../common';
import playRound from '../gametemplate';

// first version
const getProgression = (a, b) => {
  let s = '';
  let p = a;
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

const isUndefined = s => (s === undefined);

// second version
const getProgression2 = (a, b, i, count, acc) => {
  if (count === 0) return acc;
  const nextMember = a + b;
  let result = [acc[0], isUndefined(acc[1]) ? '' : `${acc[1]} `];
  if (count === i) {
    result = [nextMember, `${result[1]}..`];
  } else {
    result[1] = `${result[1]}${nextMember.toString()}`;
  }

  return getProgression2(nextMember, b, i, count - 1, result);
};

const description = 'What number is missing in this progression?';

const gameData = () => {
  const number1 = getRandomNum(1, 20);
  const number2 = getRandomNum(1, 20);
  const [rightAnswer, question] = getProgression2(number1, number2, 5, 10, []);
  return cons(question, rightAnswer.toString());
};

export default () => playRound(description, gameData);
