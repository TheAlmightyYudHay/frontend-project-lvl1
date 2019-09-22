import makeGame from '../gameEngine/engine';
import * as Progression from '../dataTypes/Progression';
import greeting from '../gameEngine/greeting';
import checkResult from '../gameEngine/checkResult';

const gameRule = 'What number is missing in the progression?\n';

const brainProgressionGame = makeGame(Progression);

export default () => {
  const playerName = greeting(gameRule);

  const gameResult = brainProgressionGame(0);

  checkResult(gameResult, playerName);
};
