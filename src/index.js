#!/usr/bin/env node
import readlineSync from 'readline-sync';

let gamerName = 'XXXX';
const cnt_of_attempt = 3; 

//задает вопрос и выводит ответ
export const askquestion = () => {
  gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!!`);
};

//возвращает случайное число
const getnum = () => {
  return 16;
};

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
