#!/usr/bin/env node
import {askquestion, paritygame} from '..';

//приглашение в игру
console.log('Welcome to the Brain Games!');

//объяснение правил
console.log('Answer "yes" if number even otherwise answer "no".');

//получить имя игрока
askquestion();

//да начнется игра
paritygame(0);

