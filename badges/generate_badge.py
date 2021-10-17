import base64
import requests

def get_base64_encoded_image(image_path):
    with open(image_path, "rb") as img_file:
        return base64.b64encode(img_file.read()).decode('utf-8')


pmid = input("Enter the Pubmed ID: ")
filename = f"{pmid}.svg"

url = f"https://img.shields.io/badge/Pubmed-{pmid}-blue?logo=pubmed"

with open(filename, 'wb') as file:
    file.write(requests.get(url).content)


print(f"data:image/svg+xml;base64,{get_base64_encoded_image(filename)}")