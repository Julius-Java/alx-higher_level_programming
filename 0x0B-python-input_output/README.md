# THIS DIRECTORY CONTAINS THE SOLUTIONS TO THE 0x0B-python-input_output PROJECT
<br>

* Task 0: Write a function that reads a text file (UTF8) and prints it to stdout: <br>
	Prototype: def read_file(filename=""): <br>
	You must use the with statement <br>
	You don’t need to manage file permission or file doesn't exist exceptions. <br>
	You are not allowed to import any module <br>
	test case file: no test cases needed <br>
<br>

* Task 1: Write a function that writes a string to a text file (UTF8) and returns the number of characters written: <br>
	Prototype: def write_file(filename="", text=""): <br>
	You must use the with statement <br>
	You don’t need to manage file permission exceptions. <br>
	Your function should create the file if doesn’t exist. <br>
	Your function should overwrite the content of the file if it already exists. <br>
	You are not allowed to import any module <br>
	test case file: no test cases needed <br>
<br>

* Task 2: Write a function that appends a string at the end of a text file (UTF8) and returns the number of characters added: <br>
	Prototype: def append_write(filename="", text=""): <br>
	If the file doesn’t exist, it should be created <br>
	You must use the with statement <br>
	You don’t need to manage file permission or file doesn't exist exceptions. <br>
	You are not allowed to import any module <br>
	test case file: no test cases needed <br>
<br>

* Task 3: Write a function that returns the JSON representation of an object (string):
	Prototype: def to_json_string(my_obj): <br>
	You don’t need to manage exceptions if the object can’t be serialized. <br>
	test case file: no test cases needed <br>
<br>

* Task 4: Write a function that returns an object (Python data structure) represented by a JSON string: <br>
	Prototype: def from_json_string(my_str): <br>
	You don’t need to manage exceptions if the JSON string doesn’t represent an object. <br>
	test case file: no test cases needed <br>
<br>

* Task 5: Write a function that writes an Object to a text file, using a JSON representation: <br>
	Prototype: def save_to_json_file(my_obj, filename): <br>
	You must use the with statement <br>
	You don’t need to manage exceptions if the object can’t be serialized. <br>
	You don’t need to manage file permission exceptions. <br>
	test case file: no test cases needed <br>
<br>

* Task 6: Write a function that creates an Object from a “JSON file”: <br>
	Prototype: def load_from_json_file(filename): <br>
	You must use the with statement <br>
	You don’t need to manage exceptions if the JSON string doesn’t represent an object. <br>
	You don’t need to manage file permissions / exceptions. <br>
	test case file: no test cases needed <br>
<br>

* Task 7: Write a script that adds all arguments to a Python list, and then save them to a file: <br>
	You must use your function save_to_json_file from 5-save_to_json_file.py <br>
	You must use your function load_from_json_file from 6-load_from_json_file.py <br>
	The list must be saved as a JSON representation in a file named add_item.json <br>
	If the file doesn’t exist, it should be create <br>
	You don’t need to manage file permissions / exceptions. <br>
	test case file: no test cases needed <br>
<br>

* Task 8: Write a function that returns the dictionary description with simple data structure (list, dictionary, string, integer and boolean) for JSON serialization of an object: <br>
	Prototype: def class_to_json(obj): <br>
	obj is an instance of a Class <br>
	All attributes of the obj Class are serializable: list, dictionary, string, integer and boolean <br>
	You are not allowed to import any module <br>
	test case file: no test casses needed <br>
<br>

* Task 9: Write a class Student that defines a student by: <br>
	Public instance attributes: <br>
		>> first_name <br>
		>> last_name <br>
		>> age <br>
	Instantiation with first_name, last_name and age: def __init__(self, first_name, last_name, age): <br>
	Public method def to_json(self): that retrieves a dictionary representation of a Student instance (same as 8-class_to_json.py) <br>
	You are not allowed to import any module <br>
	test case file: no test cases needed <br>
<br>

* Task 10: Write a class Student that defines a student by: (based on 9-student.py) <br>
	Public instance attributes: <br>
		>> first_name <br>
		>> last_name <br>
		>> age <br>
	Instantiation with first_name, last_name and age: def __init__(self, first_name, last_name, age): <br>
	Public method def to_json(self, attrs=None): that retrieves a dictionary representation of a Student instance (same as 8-class_to_json.py): <br>
		>> If attrs is a list of strings, only attribute names contained in this list must be retrieved. <br>
		>> Otherwise, all attributes must be retrieved <br>
	You are not allowed to import any module <br>
	test case file: no test cases needed <br>
<br>


