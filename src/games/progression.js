import makeGame from '../engine';
import getRandomNumber from '../lib/math';

const progressionLength = 10;

const createQuestion = (firstElement, progressionStep, hiddenElement, length) => {
  const iter = (counter, acc) => {
    if (counter === length) return acc;
    const currentElement = firstElement + progressionStep * counter;
    const newAcc = currentElement === hiddenElement ? [...acc, '..'] : [...acc, currentElement];
    return iter(counter + 1, newAcc);
  };
  return iter(0, []).join(' ');
};

const generateRound = () => {
  const firstElement = getRandomNumber(1, 7);
  const progressionStep = getRandomNumber(1, 7);
  const hiddenElementPosition = getRandomNumber(0, progressionLength - 1);
  const roundAnswer = firstElement + progressionStep * hiddenElementPosition;
  const roundQuestion = createQuestion(
    firstElement, progressionStep, roundAnswer, progressionLength,
  );
  return [roundQuestion, roundAnswer.toString()];
};

const gameDescription = 'What number is missing in the progression?';

export default () => makeGame(generateRound, gameDescription);
