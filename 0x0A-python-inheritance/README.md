# This directory contains the solutions to the 0x0A-python-inheritance project
<br>

* Task 0: Write a function that returns the list of available attributes and methods of an object: <br>
	Prototype: def lookup(obj): <br>
	Returns a list object <br>
	You are not allowed to import any module <br>
<br>

* Task 1: Write a class MyList that inherits from list: <br>
	Public instance method: def print_sorted(self): that prints the list, but sorted (ascending sort) <br>
	You can assume that all the elements of the list will be of type int <br>
	You are not allowed to import any module <br>
	test case file: ./tests/1-my_list.txt <br>
<br>

* Task 2: Write a function that returns True if the object is exactly an instance of the specified class ; otherwise False. <br>
	Prototype: def is_same_class(obj, a_class): <br>
	You are not allowed to import any module <br>
	test case file: no test case required <br>
<br>

* Task 3: Write a function that returns True if the object is an instance of, or if the object is an instance of a class that inherited from, the specified class ; otherwise False. <br>
	Prototype: def is_kind_of_class(obj, a_class): <br>
	You are not allowed to import any module <br>
	test case file: no test case required <br>
<br>

* Task 4: Write a function that returns True if the object is an instance of a class that inherited (directly or indirectly) from the specified class ; otherwise False. <br>
	Prototype: def inherits_from(obj, a_class): <br>
	You are not allowed to import any module <br>
	test case file: no test case required <br>
<br>

* Task 5: Write an empty class BaseGeometry. <br>
	You are not allowed to import any module <br>
	test case file: no test case required <br>
<br>

* Task 6: Write a class BaseGeometry (based on 5-base_geometry.py). <br>
	Public instance method: def area(self): that raises an Exception with the message area() is not implemented <br>
	You are not allowed to import any module <br>
	test case file: no test cases required <br>
<br>

* Task 7: Write a class BaseGeometry (based on 6-base_geometry.py). <br>
	Public instance method: def area(self): that raises an Exception with the message area() is not implemented <br>
	Public instance method: def integer_validator(self, name, value): that validates value: <br>
		>> you can assume name is always a string <br>
		>> if value is not an integer: raise a TypeError exception, with the message <name> must be an integer <br>
		>> if value is less or equal to 0: raise a ValueError exception with the message <name> must be greater than 0 <br>
	You are not allowed to import any module <br>
	test case file: ./tests/7-base_geometry.txt <br>
<br>

* Task 8: Write a class Rectangle that inherits from BaseGeometry (7-base_geometry.py). <br>
	Instantiation with width and height: def __init__(self, width, height): <br>
		>> width and height must be private. No getter or setter <br>
		>> width and height must be positive integers, validated by integer_validator <br>
	test case file: no test cases required <br>
<br>

* Task 9: Write a class Rectangle that inherits from BaseGeometry (7-base_geometry.py). (task based on 8-rectangle.py) <br>
	Instantiation with width and height: def __init__(self, width, height):: <br>
		>> width and height must be private. No getter or setter
		>> width and height must be positive integers validated by integer_validator <br>
	the area() method must be implemented <br>
	print() should print, and str() should return, the following rectangle description: [Rectangle] <width>/<height> <br>
	test case file: no test cases required <br>
<br>

* Task 10: Write a class Square that inherits from Rectangle (9-rectangle.py): <br>
	Instantiation with size: def __init__(self, size):; <br>
		>> size must be private. No getter or setter <br>
		>> size must be a positive integer, validated by integer_validator <br>
	the area() method must be implemented <br>
	test case file: no test cases required <br>
<br>

* Task 11: Write a class Square that inherits from Rectangle (9-rectangle.py). (task based on 10-square.py). <br>
	Instantiation with size: def __init__(self, size): <br>
		>> size must be private. No getter or setter <br>
		>> size must be a positive integer, validated by integer_validator <br>
	the area() method must be implemented <br>
	print() should print, and str() should return, the square description: [Square] <width>/<height> <br>
	test case file: no test cases required <br>
<br>


