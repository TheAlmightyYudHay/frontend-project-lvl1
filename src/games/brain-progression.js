import makeGame from '../gameEngine/engine';
import getRandomNumber from '../lib/math';

const progressionLengthCount = 10;

const toString = (firstValue, progressionStep, positionOfHidden) => {
  const iter = (step, result, prevVal) => {
    if (step > progressionLengthCount) return result;
    const currentVal = step === 1 ? firstValue : prevVal + progressionStep;
    if (step === positionOfHidden) return iter(step + 1, `${result} ..`, currentVal);
    return iter(step + 1, `${result} ${currentVal}`, currentVal);
  };
  return iter(1, '', 0);
};

const resolveProgression = (firstValue, progressionStep, positionOfHidden) => {
  const find = (current, step) => {
    if (step === positionOfHidden) return current;
    return find(current + progressionStep, step + 1);
  };
  return find(firstValue, 1);
};

const generateRound = () => {
  const firstValue = getRandomNumber(1, 7);
  const progressionStep = getRandomNumber(1, 7);
  const positionOfHidden = getRandomNumber(1, progressionLengthCount);
  const roundQuestion = toString(firstValue, progressionStep, positionOfHidden);
  const roundAnswer = `${resolveProgression(firstValue, progressionStep, positionOfHidden)}`;
  return [roundQuestion, roundAnswer];
};

const gameDescription = 'What number is missing in the progression?\n';

export default () => makeGame(generateRound, gameDescription);
