#!/usr/bin/node

const commandArgs = process.argv;

const lenArgs = commandArgs.length;

if (lenArgs <= 2) {
  console.log('undefined' + ' is ' + 'undefined');
} else if (lenArgs === 3) {
  console.log(commandArgs[2] + ' is ' + 'undefined');
} else {
  console.log(commandArgs[2] + ' is ' + commandArgs[3]);
}
