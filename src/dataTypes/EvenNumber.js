import { createNumber, numberToString } from './Number';

// Check is number even;
const isEven = (n) => (n % 2 === 0 ? 'yes' : 'no');

export {
  createNumber as getQuestionItem, numberToString as itemToString, isEven as getAnswer,
};
