#!/usr/bin/python3
def search_replace(my_list, search, replace):
    new_list = my_list.copy()
    search_index = new_list.index(search)
    new_list.remove(search)
    new_list.insert(search_index, replace)
    return new_list
