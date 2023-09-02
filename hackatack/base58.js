const Tesseract = require('tesseract.js');
const regex = /^(1|3)[a-km-zA-HJ-NP-Z1-9]{25,34}$/;

// Set the path to the image file
const imagePath = 'chart.png';

// Load the image and extract text using Tesseract OCR
Tesseract.recognize(imagePath)
  .then(({ data: { text } }) => {
    // Search for a BTC address using the regular expression pattern
    const matches = text.match(regex);

    // Print the first BTC address found (if any)
    if (matches) {
      console.log(`Found BTC address: ${matches[0]}`);
    } else {
      console.log('No BTC address found in the image');
    }
  })
  .catch((error) => {
    console.log(`Error: ${error.message}`);
  });
