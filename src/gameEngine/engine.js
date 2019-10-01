import readlineSync from 'readline-sync';

const scoreCount = 3;

const checkResult = (result, player) => {
  if (result) console.log(`Congratulations, ${player}!`);
  else console.log(`Let's try again, ${player}!`);
};

export default (generateGameRound, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  if (gameDescription) console.log(gameDescription);
  else console.log('\n');
  const playerName = readlineSync.question('May I have your name?', { defaultInput: 'Mr. Incognito' });
  console.log(`Hello, ${playerName}!\n`);
  const gameRound = (score = 0) => {
    // return true if player won
    if (score === scoreCount) return true;
    // Create round question item
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
    // return false if player lose
    return false;
  };
  checkResult(gameRound(), playerName);
};
