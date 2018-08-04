#!/usr/bin/env node

// возвращает случайное число от min до max
export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


export default getRandom;
