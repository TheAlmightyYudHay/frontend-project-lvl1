import makeGame from '../gameEngine/engine';
import getRandomNumber from '../lib/math';
/*
 * Check is number prime;
 * its failed with big numbers such as 1791533291 ( cause recursion );
 * but I do not want to use for in study project.
*/
const isPrime = (n) => {
  if (n === 2) return true;
  const limit = n / 2;
  const iter = (step) => {
    if (step > limit) return true;
    if (n % step === 0) return false;
    return iter(step + 1);
  };
  return iter(2);
};

const primeGameRound = () => {
  const primeRoundValue = getRandomNumber(1, 100);
  const primeRoundQuestion = primeRoundValue;
  const primeRoundAnswer = isPrime(primeRoundValue) ? 'yes' : 'no';
  // best solution, that I can make
  return [primeRoundQuestion, `${primeRoundAnswer}`];
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

export default () => makeGame(primeGameRound, gameRule);
