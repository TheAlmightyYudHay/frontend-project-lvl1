import makeGame from '../gameEngine/engine';
import getRandomNumber from '../lib/math';

const resolveGcd = (firstNumber, secondNumber) => {
  if (firstNumber === 0 || secondNumber === 0) return firstNumber + secondNumber;
  return firstNumber > secondNumber
    ? resolveGcd(firstNumber % secondNumber, secondNumber)
    : resolveGcd(secondNumber % firstNumber, firstNumber);
};

const createRound = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const roundQuestion = `${firstNumber} ${secondNumber}`;
  const roundAnswer = `${resolveGcd(firstNumber, secondNumber)}`;
  return [roundQuestion, roundAnswer];
};

const gameDescription = 'Find the greatest common divisor of given numbers.\n';

export default () => makeGame(createRound, gameDescription);
