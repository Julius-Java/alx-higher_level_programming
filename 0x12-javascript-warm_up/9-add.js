#!/usr/bin/node

const argOne = process.argv[2];
const argTwo = process.argv[3];

function add (argOne, argTwo) {
  if (!argTwo) {
    console.log('NaN');
  } else {
    argOne = parseInt(argOne);
    argTwo = parseInt(argTwo);
    console.log(argOne + argTwo);
  }
}

add(argOne, argTwo);
