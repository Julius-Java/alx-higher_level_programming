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

* Task 11: Write a class Student that defines a student by: (based on 10-student.py) <br>
	Public instance attributes: <br>
		>> first_name <br>
		>> last_name <br>
		>> age <br>
	Instantiation with first_name, last_name and age: def __init__(self, first_name, last_name, age): <br>
	Public method def to_json(self, attrs=None): that retrieves a dictionary representation of a Student instance (same as 8-class_to_json.py): <br>
		>> if attrs is a list of strings, only attributes name contain in this list must be retrieved. <br>
		>> Otherwise, all attributes must be retrieved <br>
	Public method def reload_from_json(self, json): that replaces all attributes of the Student instance: <br>
		>> You can assume json will always be a dictionary <br>
		>> A dictionary key will be the public attribute name <br>
		>> A dictionary value will be the value of the public attribute <br>
	You are not allowed to import any module <br>
	Now, you have a simple implementation of a serialization and deserialization mechanism (concept of representation of an object to another format, without losing any information and allow us to rebuild an object based on this representation)
	test case file: no test cases needed <br>
<br>

* Task 12: Technical interview preparation:
	You are not allowed to google anything <br>
	Whiteboard first <br>
	Create a function def pascal_triangle(n): that returns a list of lists of integers representing the Pascal’s triangle of n: <br>
		>> Returns an empty list if n <= 0 <br>
		>> You can assume n will be always an integer <br>
		>> You are not allowed to import any module <br>
<br>

* Task 13: Write a function that inserts a line of text to a file, after each line containing a specific string (see example): <br>
	Prototype: def append_after(filename="", search_string="", new_string=""): <br>
	You must use the with statement <br>
	You don’t need to manage file permission or file doesn't exist exceptions. <br>
	You are not allowed to import any module <br>
	test case file: no test cases needed <br>
<br>

* Task 14: Write a script that reads stdin line by line and computes metrics: <br>
	Input format: <IP Address> - [<date>] "GET /projects/260 HTTP/1.1" <status code> <file size> <br>
	Each 10 lines and after a keyboard interruption (CTRL + C), prints those statistics since the beginning: <br>
		>> Total file size: File size: <total size> <br>
		>> where is the sum of all previous (see input format above) <br>
		>> Number of lines by status code: <br>
			** possible status code: 200, 301, 400, 401, 403, 404, 405 and 500 <br>
			** if a status code doesn’t appear, don’t print anything for this status code <br>
			** format: <status code>: <number> <br>
			** status codes should be printed in ascending order <br>
	test case file: no test case needed <br>
<br>
