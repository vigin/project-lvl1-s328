#!/usr/bin/env node
import readlineSync from 'readline-sync';

const askquestion = () => {
const actual = readlineSync.question('May I have your name? ');
console.log(`Hello, ${actual}!`);
}

export default askquestion;
