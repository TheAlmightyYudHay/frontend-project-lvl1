import { getFrom1To100 } from './math';

const createGcdPair = (a, b) => (f) => f(a, b);

const getGcdFirst = (gcd) => gcd((a) => a);

const getGcdSecond = (gcd) => gcd((a, b) => b);

// GCD pair to string
const GcdPairToString = (gcd) => `${getGcdFirst(gcd)} ${getGcdSecond(gcd)}`;

// Generate GCD pair
const createGcd = () => {
  const first = getFrom1To100();
  const second = getFrom1To100();
  return createGcdPair(first, second);
};

const resolveGcd = (gcd) => {
  const first = getGcdFirst(gcd);
  const second = getGcdSecond(gcd);
  if (first === 0 || second === 0) return first + second;
  return first > second
    ? resolveGcd(createGcdPair(first % second, second))
    : resolveGcd(createGcdPair(second % first, first));
};

export {
  createGcd as getQuestionItem, GcdPairToString as itemToString, resolveGcd as getAnswer,
};
