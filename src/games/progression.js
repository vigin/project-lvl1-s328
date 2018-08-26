import { cons } from 'hexlet-pairs';
import getRandomNum from '../common';
import playRound from '../gametemplate';

const PROGRESSION_LENGTH = 10;

const getMemberProgression = (start, step, index) => start + step * index;

const description = 'What number is missing in this progression?';

const gameData = () => {
  const startElement = getRandomNum(1, 20);
  const step = getRandomNum(1, 20);
  const indexElement = getRandomNum(1, PROGRESSION_LENGTH) - 1;
  const iter = (count, acc) => {
    if (count === 0) return acc;
    if (count === indexElement + 1) return iter(count - 1, `.. ${acc}`);
    return iter(count - 1, `${getMemberProgression(startElement, step, count - 1)} ${acc}`);
  };
  const question = iter(PROGRESSION_LENGTH, '');
  const rightAnswer = getMemberProgression(startElement, step, indexElement);
  return cons(question, rightAnswer.toString());
};

export default () => playRound(description, gameData);
