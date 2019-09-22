import makeGame from '../engine';
import * as CalcExp from '../CalcExp';
import greeting from '../greeting';
import checkResult from '../checkResult';

const gameRule = 'What is the result of the expression?\n';

const brainCalcGame = makeGame(CalcExp);

export default () => {
  const playerName = greeting(gameRule);

  const gameResult = brainCalcGame(0);

  checkResult(gameResult, playerName);
};