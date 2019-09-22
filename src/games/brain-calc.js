import makeGame from '../engine';
import * as CalcExp from '../CalcExp';

const gameRule = 'What is the result of the expression?\n';

const brainCalcGame = makeGame(CalcExp);

export {
  brainCalcGame, gameRule,
};
