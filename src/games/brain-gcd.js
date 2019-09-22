import makeGame from '../engine';
import * as GcdPair from '../GcdPair';
import greeting from '../greeting';
import checkResult from '../checkResult';

const gameRule = 'Find the greatest common divisor of given numbers.\n';

const brainGcdGame = makeGame(GcdPair);

export default () => {
  const playerName = greeting(gameRule);

  const gameResult = brainGcdGame(0);

  checkResult(gameResult, playerName);
};
