import { getFrom1To100 } from './math';

const createNumber = getFrom1To100;

const numberToString = (n) => `${n}`;

// Check is number even;
const isEven = (n) => (n % 2 === 0 ? 'yes' : 'no');

export {
  createNumber as getQuestionItem, numberToString as itemToString, isEven as getAnswer,
};
