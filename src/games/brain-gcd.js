import makeGame from '../gameEngine/engine';
import getRandomNumber from '../lib/math';
import { triple, getFirst, getSecond } from '../dataTypes/Triple';

const createGcdPair = (a, b) => triple(a, b);

const getGcdFirst = (gcd) => getFirst(gcd);

const getGcdSecond = (gcd) => getSecond(gcd);

// GCD pair to string
const GcdPairToString = (gcd) => `${getGcdFirst(gcd)} ${getGcdSecond(gcd)}`;

// Generate GCD pair
const generateGcd = () => {
  const first = getRandomNumber(1, 50);
  const second = getRandomNumber(1, 50);
  return createGcdPair(first, second);
};

const resolveGcd = (gcd) => {
  const first = getGcdFirst(gcd);
  const second = getGcdSecond(gcd);
  if (first === 0 || second === 0) return first + second;
  return first > second
    ? resolveGcd(createGcdPair(first % second, second))
    : resolveGcd(createGcdPair(second % first, first));
};

export default () => {
  const gameRule = 'Find the greatest common divisor of given numbers.\n';
  const createGcdRound = () => {
    const roundValue = generateGcd();
    return [GcdPairToString(roundValue), `${resolveGcd(roundValue)}`];
  };
  makeGame(createGcdRound, gameRule);
};
