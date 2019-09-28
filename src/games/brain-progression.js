import makeGame from '../gameEngine/engine';
import getRandomNumber from '../lib/math';
import {
  triple, getFirst, getSecond, getThird,
} from '../dataTypes/Triple';

const progressionMaxLength = 10;

const createProgression = (start, step, hidden) => triple(start, step, hidden);

const getStart = (prog) => getFirst(prog);

const getStep = (prog) => getSecond(prog);

const getHidden = (prog) => getThird(prog);

const progToString = (prog) => {
  const firstValue = getStart(prog);
  const progStep = getStep(prog);
  const stepOfHidden = getHidden(prog);
  const iter = (step, result, prevVal) => {
    if (step > progressionMaxLength) return result;
    const currentVal = step === 1 ? firstValue : prevVal + progStep;
    if (step === stepOfHidden) return iter(step + 1, `${result} ..`, currentVal);
    return iter(step + 1, `${result} ${currentVal}`, currentVal);
  };
  return iter(1, '', 0);
};

const generateProgression = () => createProgression(
  getRandomNumber(1, 7),
  getRandomNumber(1, 7),
  getRandomNumber(1, progressionMaxLength),
);

const resolveProgression = (prog) => {
  const firstValue = getStart(prog);
  const progStep = getStep(prog);
  const stepOfHidden = getHidden(prog);
  const find = (current, step) => {
    if (step === stepOfHidden) return current;
    return find(current + progStep, step + 1);
  };
  return find(firstValue, 1);
};

export default () => {
  const gameRule = 'What number is missing in the progression?\n';
  const createProgressionRound = () => {
    const roundValue = generateProgression();
    return [progToString(roundValue), `${resolveProgression(roundValue)}`];
  };
  makeGame(createProgressionRound, gameRule);
};
