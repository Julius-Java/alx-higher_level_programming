#!/usr/bin/node

const commandArgs = process.argv;
const lenArgs = commandArgs.length;

if (lenArgs <= 2) {
  console.log('No argument');
} else if (lenArgs === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
