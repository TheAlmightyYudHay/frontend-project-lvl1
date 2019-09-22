import makeGame from '../gameEngine/engine';
import * as Number from '../dataTypes/PrimeNumber';
import greeting from '../gameEngine/greeting';
import checkResult from '../gameEngine/checkResult';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const brainProgressionGame = makeGame(Number);

export default () => {
  const playerName = greeting(gameRule);

  const gameResult = brainProgressionGame(0);

  checkResult(gameResult, playerName);
};
