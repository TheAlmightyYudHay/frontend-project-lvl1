import makeGame from '../gameEngine/engine';
import getRandomNumber from '../lib/math';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const roundQuestion = getRandomNumber(1, 100);
  const roundAnswer = isEven(roundQuestion) ? 'yes' : 'no';
  return [roundQuestion, roundAnswer];
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => makeGame(generateRound, gameDescription);
