#!/usr/bin/python3
import os
from pypdf import PdfReader
import re


def num_there(s):
    return any(i.isdigit() for i in s)

def extract_text_to_file(pdf_path):
    if not os.path.exists(pdf_path):
        print(f"Erreur : Le fichier PDF '{pdf_path}' n'existe pas.")
        return
    try:
        reader = PdfReader(pdf_path)
    except FileNotFoundError:
        print(f"Erreur : Le fichier PDF '{pdf_path}' n'a pas été trouvé.")
        return
    except Exception as e:
        print(f"Erreur lors de l'ouverture du fichier PDF : {e}")
        return
    try:
        reader = PdfReader(pdf_path)
        test = ""
        for i, page in enumerate(reader.pages):
            test += page.extract_text()
        wawa = test.split("\n")
        total_pages = len(reader.pages) - 1
        categories = []
        for items in wawa :
            if items.isupper() and ("/" + str(total_pages)) not in items and "TABLEAU" not in items:
                categories.append(items)
        azerty = 0
        while (azerty < len(categories)):
            if (num_there(categories[azerty]) or categories[azerty].startswith("(")):
                categories.remove(categories[azerty])
                continue
            if (categories[azerty].endswith("DE") or categories[azerty].endswith("ET")):
                categories[azerty] += " " + categories[azerty + 1]
                categories.remove(categories[azerty + 1])

            azerty -=-1
            data = []
            temp_list = []
            current_category = None
            item_id = 0

            for items in wawa:
                if not items.startswith('(') and '*' not in items:
                    found_new_category = False
                    for truc in categories:
                        if items in truc:
                            if current_category is not None:
                                for temp_item in temp_list:
                                    data.append([item_id, current_category, temp_item])
                                    item_id += 1
                            temp_list = []
                            current_category = items
                            found_new_category = True
                            break

                    if not found_new_category and current_category is not None:
                        if not items.startswith('(') and '*' not in items and ('%' in items or '/' in items) and ("/" + str(total_pages)) not in items and any(char.isdigit() for char in items):
                            items = items[::-1]
                            for i in range(len(items) ):
                                if (items[i].isdigit() and items[i + 1] == ' ') :
                                    items = items[:i + 1]
                                    items = items[::-1]
                                    temp_list.append(items)
                                    break

            if current_category is not None:
                for temp_item in temp_list:
                    data.append([item_id, current_category, temp_item])
                    item_id += 1
        print(data)
    except Exception as e:
        print(f"Erreur lors du traitement du fichier PDF : {e}")

if __name__ == '__main__':
    pdf_file = './1_Exemple1.pdf'
    extract_text_to_file(pdf_file)

