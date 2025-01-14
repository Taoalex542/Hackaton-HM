#!/usr/bin/python3
 
import os

def get_tables():
    filename = (os.path.dirname(os.path.realpath(__file__)) + "\\table_1_PS5555.txt")
    table1 = []
    if os.path.isfile(filename):
        f = open(filename)
        for line in f:
            table1.append(line)
        f.close()
    filename = (os.path.dirname(os.path.realpath(__file__)) + "\\table_2_HPA300.txt")
    table2 = []
    if os.path.isfile(filename):
        f = open(filename)
        for line in f:
            table2.append(line)
        f.close()
    print(table1)


def reader ():
    return [{"category": "Soins Courants","tableau1": 0,"tableau2": 0},
{"category": "Hospitalisation","tableau1": 0,"tableau2": 0},
{"category": "Optique","tableau1": 0,"tableau2": 0}]

def main():
    get_tables()
    print("a")