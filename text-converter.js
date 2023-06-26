const fs = require('fs');

const inputFile = 'input.txt';
const outputFile = 'output.txt';

// Read the contents of the input file
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading input file:', err);
    return;
  }
  // Convert the text to uppercase
  const modifiedText = data.toUpperCase();

  // Write the modified text to the output file
  fs.writeFile(outputFile, modifiedText, 'utf8', (err) => {
    if (err) {
      console.error('Error writing output file:', err);
  return;
    }
    console.log('File conversion completed successfully.');
});
});