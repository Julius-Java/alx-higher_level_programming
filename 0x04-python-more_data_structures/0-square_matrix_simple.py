#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    temp_matrix = []
    for row in matrix:
        temp_matrix.append([elem**2 for elem in row])
    return temp_matrix
