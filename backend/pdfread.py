#!/usr/bin/python3
import os
from pypdf import PdfReader

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
            if (categories[azerty].endswith("DE") or categories[azerty].endswith("ET")):
                categories[azerty] += " " + categories[azerty + 1]
                categories.remove(categories[azerty + 1])
            if (categories[azerty].startswith("(")) or num_there(categories[azerty]):
                categories.remove(categories[azerty])
            
            azerty -=-1
        for items in categories:
            print (items)
                
                

    except Exception as e:
        print(f"Erreur lors du traitement du fichier PDF : {e}")

if __name__ == '__main__':
    pdf_file = './1_Exemple1.pdf'
    extract_text_to_file(pdf_file)

