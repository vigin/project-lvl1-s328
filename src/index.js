#!/usr/bin/env node
import readlineSync from 'readline-sync';

let gamerName = 'XXXX';
const attemptsCount = 3;
const minNumber = 1;
const maxNumber = 20;
const textIntro = 'Welcome to the Brain Games!';

// приглашение + правила
const getIntro = (text) => {
  // приглашение в игру
  console.log(textIntro);

  // объяснение правил
  if (typeof text !== 'undefined') {
    console.log(text);
  }

  // пустая строка
  console.log();
};

// задает вопрос и выводит ответ
const askQuestion = () => {
  gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
};

// возвращает случайное число от min до max
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// возвращает случайное число
const getNumber = () => getRandom(minNumber, maxNumber);

// игра - один кон
const playParityGame = (win) => {
  const Number = getNumber();

  // вопрос-ответ
  console.log(`Question: ${Number}`);
  const answer = readlineSync.question('Your answer: ');
  // проверка числа
  const attempt = ((Number % 2 === 0 && answer === 'yes')
                || (Number % 2 === 1 && answer === 'no')) ? 1 : 0;
  // правильный ответ
  const answerCorrect = (Number % 2 === 0) ? 'yes' : 'no';

  if (attempt === 1) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerCorrect}'.`);
    console.log(`Let's try again, ${gamerName}!`);
  }

  // проверка попыток
  if (win + attempt === attemptsCount) {
    console.log(`Congratulations, ${gamerName}!`);
    return win + attempt;
  }
  // рекуссивно вызываем, передаем колво успешных попыток
  return playParityGame(win + attempt);
};

export const playCheckpoint2 = () => {
  // приглашение в игру 1 сценарий
  getIntro();

  // получить имя игрока
  askQuestion();
};

export const playCheckpoint4 = () => {
  // приглашение в игру 2 сценарий
  getIntro('Answer "yes" if number even otherwise answer "no".');

  // получить имя игрока
  askQuestion();

  // да начнется игра
  playParityGame(0);
};

export const playCheckpoint5 = () => {
  // приглашение в игру 3 сценарий
  getIntro('What is the result of the expression?');

  // получить имя игрока
  askQuestion();

  // да начнется игра
//  playParityGame(0);
};

export default playCheckpoint2;
