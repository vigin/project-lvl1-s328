import { cons } from 'hexlet-pairs';
import getRandomNum from '../common';
import playRound from '../gametemplate';

const isUndefined = s => (s === undefined);

const getProgression = (a, b, i, count, acc) => {
  if (count === 0) return acc;
  const nextMember = a + b;
  let result = [acc[0], isUndefined(acc[1]) ? '' : `${acc[1]} `];
  if (count === i) {
    result = [nextMember, `${result[1]}..`];
  } else {
    result[1] = `${result[1]}${nextMember.toString()}`;
  }

  return getProgression(nextMember, b, i, count - 1, result);
};

const description = 'What number is missing in this progression?';

const gameData = () => {
  const number1 = getRandomNum(1, 20);
  const number2 = getRandomNum(1, 20);
  const [rightAnswer, question] = getProgression(number1, number2, 5, 10, []);
  return cons(question, rightAnswer.toString());
};

export default () => playRound(description, gameData);
