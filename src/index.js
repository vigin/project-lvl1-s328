#!/usr/bin/env node
import readlineSync from 'readline-sync';

let gamerName = 'XXXX';
const cnt_of_attempt = 3; 
const min_chislo = 1;
const max_chislo = 20;

//задает вопрос и выводит ответ
export const askquestion = () => {
  gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
};

//возвращает случайное число от min до max
function selfRandom(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//возвращает случайное число
const getnum = () => {
  return selfRandom(min_chislo, max_chislo);
};

//игра - один кон
export const paritygame = (win) => {
  const chislo = getnum();

  //вопрос-ответ
  console.log(`Question: ${chislo}`);
  const answer = readlineSync.question('Your answer: ');

  //проверка числка
  const attempt = ((chislo % 2 === 0 && answer == 'yes') || 
            (chislo % 2 === 1 && answer == 'no'))?1:0;

  if (attempt === 1){
    console.log(`Correct!`);  
  } else {
    console.log(`Let's try again, ${gamerName}!`);
  }

  //проверка попыток
  if (win + attempt === cnt_of_attempt) {
    console.log(`Congratulations, ${gamerName}!`);
    return win + attempt;
  }
  
  //рекуссивно вызываем, передаем колво успешных попыток
  return paritygame(win + attempt);
};

export default askquestion;
