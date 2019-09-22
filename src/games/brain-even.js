import makeGame from '../gameEngine/engine';
import * as Number from '../dataTypes/EvenNumber';
import greeting from '../gameEngine/greeting';
import checkResult from '../gameEngine/checkResult';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const brainEvenGame = makeGame(Number);

export default () => {
  const playerName = greeting(gameRule);

  const gameResult = brainEvenGame(0);

  checkResult(gameResult, playerName);
};
