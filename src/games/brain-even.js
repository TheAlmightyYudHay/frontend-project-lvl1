import makeGame from '../gameEngine/engine';
import getRandomNumber from '../lib/math';

// Check is number even;
const isEven = (n) => n % 2 === 0;

const generateRound = () => {
  const roundQuestion = getRandomNumber(1, 100);
  const roundAnswer = isEven(roundQuestion) ? 'yes' : 'no';
  return [roundQuestion, roundAnswer];
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".\n';

export default () => makeGame(generateRound, gameDescription);
