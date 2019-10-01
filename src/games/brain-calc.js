import makeGame from '../gameEngine/engine';
import getRandomNumber from '../lib/math';

// Create random sign
const mathSignsList = ['*', '+', '-'];

// Resolve calc exp
const resolveExpression = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return null;
  }
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 25);
  const secondNumber = getRandomNumber(1, 25);
  const operation = mathSignsList[getRandomNumber(0, mathSignsList.length - 1)];
  const roundQuestion = `${firstNumber} ${operation} ${secondNumber}`;
  const roundAnswer = `${resolveExpression(firstNumber, secondNumber, operation)}`;
  return [roundQuestion, roundAnswer];
};

const gameDescription = 'What is the result of the expression?\n';

export default () => makeGame(generateRound, gameDescription);
