const triple = (a = null, b = null, c = null) => (f) => f(a, b, c);

const gF = (t) => t((a) => a);

const gS = (t) => t((a, b) => b);

const gT = (t) => t((a, b, c) => c);

export {
  triple, gF, gS, gT,
};
