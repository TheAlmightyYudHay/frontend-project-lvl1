import makeGame from '../gameEngine/engine';
import getRandomNumber from '../lib/math';

// Check is number even;
const isEven = (n) => n % 2 === 0;

const gameRound = () => {
  const roundValue = getRandomNumber(1, 100);
  const roundQuestion = roundValue;
  const roundAnswer = isEven(roundValue) ? 'yes' : 'no';
  // best solution, that I can make
  return [roundQuestion, `${roundAnswer}`];
};

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".\n';

export default () => makeGame(gameRound, gameRule);
