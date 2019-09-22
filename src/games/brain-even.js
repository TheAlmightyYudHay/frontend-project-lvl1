import makeGame from '../engine';
import * as SingleNumber from '../SingleNumber';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const brainEvenGame = makeGame(SingleNumber);

export {
  brainEvenGame, gameRule,
};
