#!/usr/bin/node

const commandArgs = process.argv;

const lenArgs = commandArgs.length;

if (lenArgs <= 2) {
  console.log('Not a number');
} else {
  const numInt = parseInt(commandArgs[2]);
  if (isNaN(numInt)) {
    console.log('Not a number');
  } else {
    console.log('My number: ' + numInt);
  }
}
