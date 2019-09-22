import { getFrom1To100 } from './math';
import { triple, gF, gS } from './Triple';

const createGcdPair = (a, b) => triple(a, b);

const getGcdFirst = (gcd) => gF(gcd);

const getGcdSecond = (gcd) => gS(gcd);

// GCD pair to string
const GcdPairToString = (gcd) => `${getGcdFirst(gcd)} ${getGcdSecond(gcd)}`;

// Generate GCD pair
const generateGcd = () => {
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
  generateGcd as getQuestionItem, GcdPairToString as itemToString, resolveGcd as getAnswer,
};
