import makeGame from '../gameEngine/engine';
import getRandomNumber from '../lib/math';
import {
  triple, getFirst, getSecond, getThird,
} from '../dataTypes/Triple';

// Create random sign
const mathSignsList = ['*', '+', '-'];

const chooseMathSign = (list) => list[getRandomNumber(0, list.length - 1)];

// functions for creating and managing calc expression data type
const createExpression = (a, b, sign) => triple(a, b, sign);

const getExpFirst = (exp) => getFirst(exp);

const getExpSecond = (exp) => getSecond(exp);

const getExpSign = (exp) => getThird(exp);

// Expression to string
const expToString = (exp) => `${getExpFirst(exp)} ${getExpSign(exp)} ${getExpSecond(exp)}`;

// Generate calc expression
const generateExpression = () => {
  const first = getRandomNumber(1, 25);
  const second = getRandomNumber(1, 25);
  const sign = chooseMathSign(mathSignsList);
  return createExpression(first, second, sign);
};

// Resolve calc exp
const resolveExp = (exp) => {
  const first = getExpFirst(exp);
  const second = getExpSecond(exp);
  const sign = getExpSign(exp);
  switch (sign) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    default:
      return first + second;
  }
};

const gameRound = () => {
  const roundValue = generateExpression();
  const roundQuestion = expToString(roundValue);
  const roundAnswer = resolveExp(roundValue);
  // best solution, that I can make
  return [roundQuestion, `${roundAnswer}`];
};

const gameRule = 'What is the result of the expression?\n';

export default () => makeGame(gameRound, gameRule);
