import makeGame from '../gameEngine/engine';
import getRandomNumber from '../lib/math';

// Check is number even;
const isEven = (n) => n % 2 === 0;

const createEvenRound = () => {
  const roundValue = getRandomNumber(1, 100);
  return [roundValue, `${isEven(roundValue) ? 'yes' : 'no'}`];
};

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".\n';

export default () => makeGame(createEvenRound, gameRule);
