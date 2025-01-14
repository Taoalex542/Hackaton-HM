#!/usr/bin/python3
 
import os

def get_tables():
    filename = (os.path.dirname(os.path.realpath(__file__)) + "/table_1_PS5555.txt")
    table1 = []
    if os.path.isfile(filename):
        f = open(filename)
        for line in f:
            table1.append(line.replace("\n", ""))
        f.close()
    filename = (os.path.dirname(os.path.realpath(__file__)) + "/table_2_HPA300.txt")
    table2 = []
    if os.path.isfile(filename):
        f = open(filename)
        for line in f:
            table2.append(line.replace("\n", ""))
        f.close()
    newfile1 = []
    for items in table1:
        newfile1.append(items.split(','))
    newfile2 = []
    for items in table2:
        newfile2.append(items.split(','))
    return (newfile1, newfile2)

def find_total(tbl):
    i = 0
    for infos in tbl:
        for data in infos:
            if 'Total' in data or 'total' in data:
                return i
            i += 1
        i = 0

def reader ():
    return [{"category": "Soins Courants","tableau1": 0,"tableau2": 0},
{"category": "Hospitalisation","tableau1": 0,"tableau2": 0},
{"category": "Optique","tableau1": 0,"tableau2": 0}]

def main():
    tbl = get_tables()
    tbl1 = tbl[0]
    for items in tbl1:
        print (items)
    print (find_total(tbl1))
    tbl2 = tbl[1]

main()