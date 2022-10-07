#!/usr/bin/node

function fact (argOne) {
  if (argOne <= 1) {
    return 1;
  } else {
    return argOne * fact(argOne - 1);
  }
}

const firstArg = process.argv[2];

if (!firstArg) {
  console.log(1);
} else {
  console.log(fact(firstArg));
}
