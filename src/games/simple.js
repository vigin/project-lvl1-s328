import readlineSync from 'readline-sync';

export const playFirstGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log();
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
};

export default playFirstGame;
