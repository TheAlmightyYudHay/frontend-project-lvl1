import makeGame from '../engine';
import * as Progression from '../Progression';
import greeting from '../greeting';
import checkResult from '../checkResult';

const gameRule = 'What number is missing in the progression?\n';

const brainProgressionGame = makeGame(Progression);

export default () => {
  const playerName = greeting(gameRule);

  const gameResult = brainProgressionGame(0);

  checkResult(gameResult, playerName);
};
