import readlineSync from 'readline-sync';

const scoreCount = 3;

export default (generateGameRound, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  if (gameDescription) console.log(`${gameDescription}\n`);
  else console.log('\n');
  const playerName = readlineSync.question('May I have your name?', { defaultInput: 'Mr. Incognito' });
  console.log(`Hello, ${playerName}!\n`);
  const gameRound = (score = 0) => {
    if (score === scoreCount) {
      console.log(`Congratulations, ${playerName}!`);
      return true;
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
    return false;
  };
  return gameRound();
};
