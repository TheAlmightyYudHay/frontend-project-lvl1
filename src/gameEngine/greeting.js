import readlineSync from 'readline-sync';

export default (gameRule) => {
  console.log('Welcome to the Brain Games!');
  if (gameRule) console.log(gameRule);
  else console.log('\n');
  const playerName = readlineSync.question('May I have your name?', { defaultInput: 'Mr. Incognito' });
  console.log(`Hello, ${playerName}!\n`);
  return playerName;
};
