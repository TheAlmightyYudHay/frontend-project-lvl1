import makeGame from '../engine';
import getRandomNumber from '../lib/math';

const progressionLength = 10;

const createQuestion = (firstValue, progressionStep, hidden, length) => {
  const finalValue = firstValue + progressionStep * (length - 1);
  const iter = (current, acc) => {
    if (current > finalValue) return acc;
    const newValue = current === hidden ? '..' : current;
    return iter(current + progressionStep, [...acc, newValue]);
  };
  return iter(firstValue, []).join(' ');
};

const generateRound = () => {
  const firstValue = getRandomNumber(1, 7);
  const progressionStep = getRandomNumber(1, 7);
  const hiddenElementPosition = getRandomNumber(0, progressionLength - 1);
  const hiddenValue = firstValue + progressionStep * hiddenElementPosition;
  const roundQuestion = createQuestion(firstValue, progressionStep, hiddenValue, progressionLength);
  const roundAnswer = hiddenValue.toString();
  return [roundQuestion, roundAnswer];
};

const gameDescription = 'What number is missing in the progression?';

export default () => makeGame(generateRound, gameDescription);
