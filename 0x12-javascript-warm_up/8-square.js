#!/usr/bin/node

const commandArgs = process.argv;
const firstArg = commandArgs[2];
const str = 'X';

if (!parseInt(firstArg)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < firstArg; i++) {
    console.log(str.repeat(firstArg));
  }
}
