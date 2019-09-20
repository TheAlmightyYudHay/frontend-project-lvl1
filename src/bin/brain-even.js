#!/usr/bin/env node
import { askName, greeting, askEven } from '../index';

console.log('Welcome to the Brain Games!\n');

const playerName = askName();

greeting(playerName);

const gameResult = askEven(0);

if (gameResult) console.log(`Congratulations, ${playerName}!`);
else console.log(`Let's try again, ${playerName}!`);
