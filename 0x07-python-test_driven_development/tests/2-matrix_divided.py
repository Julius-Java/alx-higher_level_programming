TEST CASES FOR THE ADD_INTEGER FUNCTION

===============================

    >>> add_integer = __import__('0-add_integer').add_integer

    >>> add_integer(0)
    98

    >>> add_integer(2, 3)
    5

    >>> add_integer(2, 4.2)
    6

    >>> add_integer(5)
    103

    >>> add_integer("Hi")
    Traceback (most recent call last):
    ...
    TypeError: a must be an integer

    >>> add_integer(2, "hey")
    Traceback (most recent call last):
    ...
    TypeError: b must be an integer

    >>> add_integer(2, 4.6)
    6

    >>> add_integer(3, [3, 5, 6])
    Traceback (most recent call last):
    ...
    TypeError: b must be an integer

    >>> add_integer({1, 2, 3, 4}, 4.2)
    Traceback (most recent call last):
    ...
    TypeError: a must be an integer

    >>> add_integer(3j, 4)
    Traceback (most recent call last):
    ...
    TypeError: a must be an integer
