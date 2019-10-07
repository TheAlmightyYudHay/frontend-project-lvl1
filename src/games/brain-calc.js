import makeGame from '../engine';
import getRandomNumber from '../lib/math';

const mathSignsList = ['*', '+', '-'];

const resolveExpression = (firstOperand, secondOperand, operation) => {
  switch (operation) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return null;
  }
};

const generateRound = () => {
  const firstOperand = getRandomNumber(1, 25);
  const secondOperand = getRandomNumber(1, 25);
  const operation = mathSignsList[getRandomNumber(0, mathSignsList.length - 1)];
  const roundQuestion = `${firstOperand} ${operation} ${secondOperand}`;
  const roundAnswer = resolveExpression(firstOperand, secondOperand, operation).toString();
  return [roundQuestion, roundAnswer];
};

const gameDescription = 'What is the result of the expression?';

export default () => makeGame(generateRound, gameDescription);
