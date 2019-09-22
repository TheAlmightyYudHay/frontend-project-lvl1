import { getFrom1To3, getFrom1To100 } from '../lib/math';
import {
  triple, gF, gS, gT,
} from './Triple';

// Create random sign
// eslint-disable-next-line consistent-return
const createMathSign = () => {
  // eslint-disable-next-line default-case
  switch (getFrom1To3()) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
  }
};

// functions for creating and managing calc expression data type
const createExpression = (a, b, sign) => triple(a, b, sign);

const getExpFirst = (exp) => gF(exp);

const getExpSecond = (exp) => gS(exp);

const getExpSign = (exp) => gT(exp);

// Expression to string
const expToString = (exp) => `${getExpFirst(exp)} ${getExpSign(exp)} ${getExpSecond(exp)}`;

// Generate calc expression
const generateExpression = () => {
  const first = getFrom1To100();
  const second = getFrom1To100();
  const sign = createMathSign();
  return createExpression(first, second, sign);
};

// Resolve calc exp
// eslint-disable-next-line consistent-return
const resolveExp = (exp) => {
  const first = getExpFirst(exp);
  const second = getExpSecond(exp);
  const sign = getExpSign(exp);
  // eslint-disable-next-line default-case
  switch (sign) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
  }
};

export {
  generateExpression as getQuestionItem, expToString as itemToString, resolveExp as getAnswer,
};
