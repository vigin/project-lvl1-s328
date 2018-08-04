#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandom, getIntro } from './common';

// возвращает случайное число от 1 до 30
const getNumber = () => getRandom(1, 30);

const getGcd = (a, b) => {
  let r = 0;
  let n = a;
  let m = b;
  while (n !== 0) {
    r = m % n;
    m = n;
    n = r;
  }
  return m;
};

export const playGcdGame = () => {
  // приглашение в игру
  getIntro();
  console.log('Find the greatest common divisor of given numbers.');
  console.log();// пустая строка
  // приветствие + правила
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
  let attempt = 0;
  let Number1;
  let Number2;
  let Answer;
  // проверка количества правильных попыток
  while (attempt < 3) {
    Number1 = getNumber();
    Number2 = getNumber();
    // задать вопрос
    console.log(`Question: ${Number1} ${Number2}`);
    // получить ответ
    Answer = readlineSync.question('Your answer: ');
    // проверить ответ
    if (Number(Answer) === getGcd(Number1, Number2)) {
      console.log('Correct!');
      // еще одна правильная попытка
      attempt += 1;
    } else {
    // если неправильная вывести правильный ответ и выйти из игры
      console.log(`'${Answer}' is wrong answer ;(. Correct answer was '${getGcd(Number1, Number2)}'.`);
      console.log(`Let's try again, ${gamerName}!`);
      return;
    }
  }
  // сообщение победителю
  console.log(`Congratulations, ${gamerName}!`);
};

export default playGcdGame;
