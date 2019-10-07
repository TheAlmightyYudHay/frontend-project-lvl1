import makeGame from '../engine';
import getRandomNumber from '../lib/math';

const progressionLength = 10;

const buildProgressionString = (firstValue, progressionStep, hiddenElementPosition) => {
  const iter = (step, result, previousValue) => {
    if (step > progressionLength) return result;
    const currentValue = step === 1 ? firstValue : previousValue + progressionStep;
    if (step === hiddenElementPosition) return iter(step + 1, `${result} ..`, currentValue);
    return iter(step + 1, `${result} ${currentValue}`, currentValue);
  };
  return iter(1, '', 0);
};

const generateRound = () => {
  const firstValue = getRandomNumber(1, 7);
  const progressionStep = getRandomNumber(1, 7);
  const hiddenElementPosition = getRandomNumber(1, progressionLength);
  const roundQuestion = buildProgressionString(firstValue, progressionStep, hiddenElementPosition);
  const roundAnswer = (firstValue + progressionStep * (hiddenElementPosition - 1)).toString();
  return [roundQuestion, roundAnswer];
};

const gameDescription = 'What number is missing in the progression?';

export default () => makeGame(generateRound, gameDescription);
