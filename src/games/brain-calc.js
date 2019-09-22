import makeGame from '../gameEngine/engine';
import * as CalcExp from '../dataTypes/CalcExp';
import greeting from '../gameEngine/greeting';
import checkResult from '../gameEngine/checkResult';

const gameRule = 'What is the result of the expression?\n';

const brainCalcGame = makeGame(CalcExp);

export default () => {
  const playerName = greeting(gameRule);

  const gameResult = brainCalcGame(0);

  checkResult(gameResult, playerName);
};
