import makeGame from '../engine';
import getRandomNumber from '../lib/math';

const resolveGcd = (firstOperand, secondOperand) => {
  if (firstOperand === 0 || secondOperand === 0) return firstOperand + secondOperand;
  return firstOperand > secondOperand
    ? resolveGcd(firstOperand % secondOperand, secondOperand)
    : resolveGcd(secondOperand % firstOperand, firstOperand);
};

const createRound = () => {
  const firstOperand = getRandomNumber(1, 50);
  const secondOperand = getRandomNumber(1, 50);
  const roundQuestion = `${firstOperand} ${secondOperand}`;
  const roundAnswer = resolveGcd(firstOperand, secondOperand).toString();
  return [roundQuestion, roundAnswer];
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

export default () => makeGame(createRound, gameDescription);
