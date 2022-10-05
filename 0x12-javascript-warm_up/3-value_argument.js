#!/usr/bin/node

const commandArgs = process.argv;

if (!commandArgs[2]) {
  console.log('No argument');
} else {
  console.log(commandArgs[2]);
}
