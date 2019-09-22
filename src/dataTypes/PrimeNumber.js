import { createNumber, numberToString } from './Number';

/*
 * Check is number prime;
 * its failed with big numbers such as 1791533291 ( cause recursion );
 * but I do not want to use for in study project.
*/
const isPrime = (n) => {
  if (n === 2) return true;
  const limit = n / 2;
  const iter = (step) => {
    if (step > limit) return true;
    if (n % step === 0) return false;
    return iter(step + 1);
  };
  return iter(2);
};

const checkResult = (n) => (isPrime(n) ? 'yes' : 'no');

export {
  createNumber as getQuestionItem, numberToString as itemToString, checkResult as getAnswer,
};
