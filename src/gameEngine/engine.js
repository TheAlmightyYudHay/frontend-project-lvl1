import readlineSync from 'readline-sync';
import checkResult from './checkResult';

const scoreToWin = 3;

/* Fabric function for games. Its take 2 functions:
 * first generate the round question and second one looking for correct answer.
 */

export default (gameRoundGenerator, gameRule) => {
  console.log('Welcome to the Brain Games!');
  if (gameRule) console.log(gameRule);
  else console.log('\n');
  const playerName = readlineSync.question('May I have your name?', { defaultInput: 'Mr. Incognito' });
  console.log(`Hello, ${playerName}!\n`);
  const gameRound = (score = 0) => {
    // return true if player won
    if (score === scoreToWin) return true;
    // Create round question item
    const [roundQuestion, roundAnswer] = gameRoundGenerator();
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
