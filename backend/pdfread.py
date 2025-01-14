#!/usr/bin/python3

import os
from pypdf import PdfReader

def extract_text_to_file(pdf_path):
    if not os.path.exists(pdf_path):
        print(f"Erreur : Le fichier PDF '{pdf_path}' n'existe pas.")
        return
    
    try:
        reader = PdfReader(pdf_path)
        test = ""
        for i, page in enumerate(reader.pages):
            test += page.extract_text()
        wawa = test.split("\n")
        for items in wawa :
            if items.startswith("(") or items.startswith(" ("):
                wawa.remove(items)
        for items in wawa:
            print(items, '\n')

    except Exception as e:
        print(f"Erreur lors du traitement du fichier PDF : {e}")

if __name__ == '__main__':
    pdf_file = './1_Exemple1.pdf'
    extract_text_to_file(pdf_file)
