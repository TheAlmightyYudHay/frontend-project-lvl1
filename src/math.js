// Get some random number from 1 to 100;
const getRandomNumber = (min, max) => () => Math.floor(min + Math.random() * max);

const getFrom1To3 = getRandomNumber(1, 3);

const getFrom1To100 = getRandomNumber(1, 100);

export {
  getFrom1To3, getFrom1To100,
};
