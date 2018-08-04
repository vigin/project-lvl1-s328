#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandom, getIntro } from './common';
// возвращает случайное число от 1 до 20
const getNumber = () => getRandom(1, 20);
const getCorrectAnswer = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '*':
      return a * b;
    case '-':
      return a - b;
    default:
      // no action
      return undefined;
  }
};

export const playCalcGame = () => {
  // приглашение в игру
  getIntro();
  console.log('What is the result of the expression?');
  console.log();// пустая строка
  // приветствие + правила
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
  let attempt = 0;
  let Number1;
  let Number2;
  let Answer;
  let Operation;
  // проверка количества правильных попыток
  while (attempt < 3) {
    Number1 = getNumber();
    Number2 = getNumber();
    switch (getRandom(1, 3)) {
      case 1:
        Operation = '+';
        break;
      case 2:
        Operation = '-';
        break;
      case 3:
        Operation = '*';
        break;
      default:
        // no action
    }
    // задать вопрос
    console.log(`Question: ${Number1} ${Operation} ${Number2}`);
    // получить ответ
    Answer = readlineSync.question('Your answer: ');
    // проверить ответ
    if (Number(Answer) === getCorrectAnswer(Number1, Number2, Operation)) {
      console.log('Correct!');
      // еще одна правильная попытка
      attempt += 1;
    } else {
    // если неправильная вывести правильный ответ и выйти из игры
      console.log(`'${Answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(Number1, Number2, Operation)}'.`);
      console.log(`Let's try again, ${gamerName}!`);
      return;
    }
  }
  // сообщение победителю
  console.log(`Congratulations, ${gamerName}!`);
};

export default playCalcGame;
