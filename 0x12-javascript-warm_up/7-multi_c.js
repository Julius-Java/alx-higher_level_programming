#!/usr/bin/node

const commandArgs = process.argv;

const lenArgs = commandArgs.length;

if (lenArgs <= 2) {
  console.log('Missing number of occurrences');
} else {
  const numInt = parseInt(commandArgs[2]);
  if (!isNaN(numInt)) {
    if (numInt > 1) {
      for (let i = 0; i < numInt; i++) {
        console.log('C is fun');
      }
    } else {
      process.exit(1);
    }
  }
}
