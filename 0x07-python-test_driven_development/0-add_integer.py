#!/usr/bin/python3
'''add_integer function

'''


def add_integer(a, b=98):
    '''add function

    returns the result of the addition of two integers
    '''
    if not isinstance(a, (int, float)):
        raise TypeError("a must be an integer")
    elif not isinstance(b, (int, float)):
        raise TypeError("b must be an integer")
    elif type(a) == float:
        return int(a) + int(b)
    elif type(b) == float:
        return int(a) + int(b)
    else:
        return a + b
