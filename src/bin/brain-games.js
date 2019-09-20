#!/usr/bin/env node
import { askName, greeting } from '../index';

console.log('Welcome to the Brain Games!\n');

const playerName = askName();

greeting(playerName);
