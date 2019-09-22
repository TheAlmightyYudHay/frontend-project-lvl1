import getRandomNumber from './math';

const createNumber = getRandomNumber(1, 100);

const numberToString = (n) => `${n}`;

// Check is number even;
const isEven = (n) => (n % 2 === 0 ? 'yes' : 'no');

export {
  createNumber as getQuestionItem, numberToString as itemToString, isEven as getAnswer,
};
