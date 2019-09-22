import makeGame from '../engine';
import * as SingleNumber from '../SingleNumber';
import greeting from '../greeting';
import checkResult from '../checkResult';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const brainEvenGame = makeGame(SingleNumber);

export default () => {
  const playerName = greeting(gameRule);

  const gameResult = brainEvenGame(0);

  checkResult(gameResult, playerName);
};
