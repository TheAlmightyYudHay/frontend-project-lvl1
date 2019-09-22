import { getFrom1To7, getFrom1To10 } from './math';
import {
  triple, gF, gS, gT,
} from './Triple';

const progressionMaxLength = 10;

const createProgression = (start, step, hidden) => triple(start, step, hidden);

const getStart = (prog) => gF(prog);

const getStep = (prog) => gS(prog);

const getHidden = (prog) => gT(prog);

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

const generateProgression = () => createProgression(getFrom1To7(), getFrom1To7(), getFrom1To10());

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

export {
  generateProgression as getQuestionItem,
  progToString as itemToString,
  resolveProgression as getAnswer,
};
