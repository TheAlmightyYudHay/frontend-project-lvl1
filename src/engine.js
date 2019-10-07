import readlineSync from 'readline-sync';

const scoresCount = 3;

export default (generateGameRound, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  if (gameDescription) console.log(`${gameDescription}\n`);
  else console.log('\n');
  const playerName = readlineSync.question('May I have your name?', { defaultInput: 'Mr. Incognito' });
  console.log(`Hello, ${playerName}!\n`);
  // eslint-disable-next-line consistent-return
  const gameRound = (score) => {
    if (score === scoresCount) {
      console.log(`Congratulations, ${playerName}!`);
    }
    const [roundQuestion, roundAnswer] = generateGameRound();
    console.log(`Question: ${roundQuestion}`);
    const answer = readlineSync.question('Your answer: ', {
      defaultInput: 'wrong!',
    });
    if (roundAnswer === answer) {
      console.log('Correct!');
      return gameRound(score + 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${roundAnswer}'.`);
    console.log(`Let's try again, ${playerName}!`);
  };
  return gameRound(0);
};
