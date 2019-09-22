#!/usr/bin/env node
import greeting from '../greeting';
import { brainCalcGame, gameRule } from '../games/brain-calc';
import checkResult from '../checkResult';

const playerName = greeting(gameRule);

const gameResult = brainCalcGame(0);

checkResult(gameResult, playerName);
