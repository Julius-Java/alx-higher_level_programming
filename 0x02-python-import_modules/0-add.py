#!/usr/bin/python3
from add_0 import add


a = 1
b = 2


def add_0(a, b):
    print("{:d} + {:d} = {:d}".format(a, b, add(a, b)))


if __name__ == "__main__":
    add_0(a, b)
