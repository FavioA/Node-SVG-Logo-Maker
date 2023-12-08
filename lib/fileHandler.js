// lib/fileHandler.js
const fs = require('fs');

const saveSVG = (content) => {
  fs.writeFileSync('./logo.svg', content);
  console.log('Generated logo.svg');
};

module.exports = { saveSVG };
