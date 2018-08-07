import { cons } from 'hexlet-pairs';
import getRandomNum from '../common';
import playRound from '../gametemplate';

const description = 'Find the greatest common divisor of given numbers.\n';

export const gameData = () => {
  const number1 = getRandomNum(1, 20);
  const number2 = getRandomNum(1, 20);
  let question;
  let rightanswer;
  switch (getRandomNum(1, 3)) {
    case 1:
      question = `${number1} + ${number2}`;
      rightanswer = number1 + number2;
      break;
    case 2:
      question = `${number1} - ${number2}`;
      rightanswer = number1 - number2;
      break;
    case 3:
      question = `${number1} * ${number2}`;
      rightanswer = number1 * number2;
      break;
    default:
  }
  return cons(question, rightanswer.toString());
};

export default () => playRound(description, gameData);
