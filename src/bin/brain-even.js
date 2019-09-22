#!/usr/bin/env node
import greeting from '../greeting';
import { brainEvenGame, gameRule } from '../games/brain-even';
import checkResult from '../checkResult';

const playerName = greeting(gameRule);

const gameResult = brainEvenGame(0);

checkResult(gameResult, playerName);
