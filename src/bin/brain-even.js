#!/usr/bin/env node
import { askQuestion, playParityGame } from '..';

// приглашение в игру
console.log('Welcome to the Brain Games!');

// объяснение правил
console.log('Answer "yes" if number even otherwise answer "no".');

// получить имя игрока
askQuestion();

// да начнется игра
playParityGame(0);
