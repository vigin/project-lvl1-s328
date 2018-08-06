#!/usr/bin/env node

// возвращает случайное число от min до max
export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getIntro = () => console.log('Welcome to the Brain Games!');

export default getRandom;
