import { cons } from 'hexlet-pairs';
import getRandomNum from '../common';
import playRound from '../gametemplate';

const description = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const number1 = getRandomNum(1, 20);
  const number2 = getRandomNum(1, 20);
  let question;
  let rightAnswer;
  switch (getRandomNum(1, 3)) {
    case 1:
      question = `${number1} + ${number2}`;
      rightAnswer = number1 + number2;
      break;
    case 2:
      question = `${number1} - ${number2}`;
      rightAnswer = number1 - number2;
      break;
    default:
      question = `${number1} * ${number2}`;
      rightAnswer = number1 * number2;
  }
  return cons(question, rightAnswer.toString());
};

export default () => playRound(description, gameData);
