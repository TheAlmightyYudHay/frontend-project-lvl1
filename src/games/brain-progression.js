import makeGame from '../engine';
import getRandomNumber from '../lib/math';

const progressionLength = 10;

// I use this function to create progression string, not to get progression hidden element
// For example from createQuestion(1, 1, 3) we get '1 2 .. 4 5 6 7 8 9 10' etc
const createQuestion = (firstValue, progressionStep, hiddenElementPosition) => {
  // I use step for iteration process as counter;
  const iter = (counter, result, previousValue) => {
    if (counter === progressionLength) return result;
    const currentValue = counter === 0 ? firstValue : previousValue + progressionStep;
    if (counter === hiddenElementPosition) return iter(counter + 1, `${result} ..`, currentValue);
    return iter(counter + 1, `${result} ${currentValue}`, currentValue);
  };
  return iter(0, '', 0);
};

const generateRound = () => {
  const firstValue = getRandomNumber(1, 7);
  const progressionStep = getRandomNumber(1, 7);
  const hiddenElementPosition = getRandomNumber(0, progressionLength - 1);
  const roundQuestion = createQuestion(firstValue, progressionStep, hiddenElementPosition);
  const roundAnswer = (firstValue + progressionStep * hiddenElementPosition).toString();
  return [roundQuestion, roundAnswer];
};

const gameDescription = 'What number is missing in the progression?';

export default () => makeGame(generateRound, gameDescription);
