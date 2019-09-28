import makeGame from '../gameEngine/engine';
import getRandomNumber from '../lib/math';

// Check is number even;
const isEven = (n) => n % 2 === 0;

const evenGameRound = () => {
  const evenRoundValue = getRandomNumber(1, 100);
  const evenRoundQuestion = evenRoundValue;
  const evenRoundAnswer = isEven(evenRoundValue) ? 'yes' : 'no';
  // best solution, that I can make
  return [evenRoundQuestion, `${evenRoundAnswer}`];
};

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".\n';

export default () => makeGame(evenGameRound, gameRule);
