const triple = (a = null, b = null, c = null) => (f) => f(a, b, c);

const getFirst = (t) => t((a) => a);

const getSecond = (t) => t((a, b) => b);

const getThird = (t) => t((a, b, c) => c);

export {
  triple, getFirst, getSecond, getThird,
};
