import { cons } from 'hexlet-pairs';
import getRandomNum from '../common';
import playRound from '../gametemplate';

const getMemberProgression = (start, step, index) => start + step * index;

const getProgression = (start, step) => {
  let result = '';
  for (let i = 0; i < 10; i += 1) {
    if (i !== 5) {
      result = `${result} ${getMemberProgression(start, step, i).toString()}`;
    } else {
      result = `${result} ..`;
    }
  }
  return result;
};

const description = 'What number is missing in this progression?';

const gameData = () => {
  const number1 = getRandomNum(1, 20);
  const number2 = getRandomNum(1, 20);
  const question = getProgression(number1, number2);
  const rightAnswer = getMemberProgression(number1, number2, 5);
  return cons(question, rightAnswer.toString());
};

export default () => playRound(description, gameData);
