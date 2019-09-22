import makeGame from '../gameEngine/engine';
import * as GcdPair from '../dataTypes/GcdPair';
import greeting from '../gameEngine/greeting';
import checkResult from '../gameEngine/checkResult';

const gameRule = 'Find the greatest common divisor of given numbers.\n';

const brainGcdGame = makeGame(GcdPair);

export default () => {
  const playerName = greeting(gameRule);

  const gameResult = brainGcdGame(0);

  checkResult(gameResult, playerName);
};
