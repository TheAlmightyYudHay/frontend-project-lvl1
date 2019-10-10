import readlineSync from 'readline-sync';

const roundCount = 3;

export default (generateGameRound, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  if (gameDescription) console.log(`${gameDescription}\n`);
  else console.log('\n');
  const playerName = readlineSync.question('May I have your name?', { defaultInput: 'Mr. Incognito' });
  console.log(`Hello, ${playerName}!\n`);
  const gameRound = (round, lastRound) => {
    if (round > lastRound) {
      console.log(`Congratulations, ${playerName}!`);
      return undefined;
    }
    const [roundQuestion, roundAnswer] = generateGameRound();
    console.log(`Question: ${roundQuestion}`);
    const answer = readlineSync.question('Your answer: ', {
      defaultInput: 'wrong!',
    });
    if (roundAnswer === answer) {
      console.log('Correct!');
      return gameRound(round + 1, lastRound);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${roundAnswer}'.`);
    console.log(`Let's try again, ${playerName}!`);
    return undefined;
  };
  return gameRound(1, roundCount);
};
