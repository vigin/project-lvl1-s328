#!/usr/bin/env node
import readlineSync from 'readline-sync';

let gamerName = 'XXXX';
let attempt = 0;
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
const askPlayerName = () => {
  gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
};

// возвращает случайное число от min до max
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// возвращает случайное число
const getNumber = () => getRandom(minNumber, maxNumber);

const cons = (a, b, c, d, e) => (message) => {
  switch (message) {
    case 'askQuestion':
      return a;
    case 'setAnswer':
      return b;
    case 'getAnswer':
      return c;
    case 'checkAnswer':
      return d;
    case 'getCorrectAnswer':
      return e;
    default:
      return undefined;
  }
};

let Number;
let Answer;

// askQuestion
const f1 = () => {
  Number = getNumber();

  // вопрос-ответ
  console.log(`Question: ${Number}`);
};

// setAnswer
const f2 = () => {
  Answer = readlineSync.question('Your answer: ');
};

// getAnswer
const f3 = () => Answer;

// checkAnswer проверка числа
const f4 = () => (((Number % 2 === 0 && Answer === 'yes') || (Number % 2 === 1 && Answer === 'no')) ? 1 : 0);

// getCorrectAnswer
const f5 = () => ((Number % 2 === 0) ? 'yes' : 'no');

// сборка функций для раунда игры
const round = cons(f1, f2, f3, f4, f5);

const askQuestion = func => func('askQuestion');
const setAnswer = func => func('setAnswer');
const getAnswer = func => func('getAnswer');
const checkAnswer = func => func('checkAnswer');
const getCorrectAnswer = func => func('getCorrectAnswer');

// const checkAnswer1 = () => true;

// шаблон процесса игры
const processGame = (variantOfGame) => {
  // проверка количества правильных попыток
  while (attempt < attemptsCount) {
    // задать вопрос
    askQuestion(variantOfGame)();
    // получить ответ
    setAnswer(variantOfGame)();

    // проверить ответ
    if (checkAnswer(variantOfGame)()) {
      // еще одна правильная попытка
      attempt += 1;
      console.log(`attempt: ${attempt}`);
    } else {
    // если неправильная вывести правильный ответ и выйти из игры
      console.log(`'${getAnswer(variantOfGame)()}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(variantOfGame)()}'.`);
      console.log(`Let's try again, ${gamerName}!`);
      return;
    }
  }

  // сообщение победителю
  console.log(`Congratulations, ${gamerName}!`);
};

// сценарий полной игры
const playGame = (intro, template, variant) => {
  // приветствие + правила
  getIntro(intro);

  // получить имя игрока
  askPlayerName();

  // процесс игры
  template(variant);
};

export const playEvenGame = () => playGame('Answer "yes" if number even otherwise answer "no".', processGame, round);

export const playCalcGame = () => playGame('What is the result of the expression?', processGame, round);

export const playIntroGame = () => playGame('', () => {}, undefined);

export default playEvenGame;
