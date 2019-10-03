import makeGame from '../gameEngine/engine';
import getRandomNumber from '../lib/math';

const isPrime = (number) => {
  if (number < 2) return false;
  if (number === 2) return true;
  const limit = number / 2;
  const iter = (step) => {
    if (step > limit) return true;
    if (number % step === 0) return false;
    return iter(step + 1);
  };
  return iter(2);
};

const generateRound = () => {
  const roundQuestion = getRandomNumber(1, 100);
  const roundAnswer = isPrime(roundQuestion) ? 'yes' : 'no';
  return [roundQuestion, roundAnswer];
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => makeGame(generateRound, gameDescription);
