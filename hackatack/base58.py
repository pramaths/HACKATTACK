import pytesseract
import re

# Set the path to the image file
image_path = 'chart.png'

# Set the regular expression pattern to match a BTC address in Base58 format
btc_pattern = r'^(1|3)[a-km-zA-HJ-NP-Z1-9]{25,34}$'

# Load the image and extract text using Tesseract OCR
text = pytesseract.image_to_string(image_path)

# Search for a BTC address using the regular expression pattern
matches = re.findall(btc_pattern, text)

# Print the first BTC address found (if any)
if matches:
    print(f'Found BTC address: {matches[0]}')
else:
    print('No BTC address found in the image')
