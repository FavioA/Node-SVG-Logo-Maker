// lib/fileHandler.js
const fs = require('fs');

const saveSVG = (content) => {
  const svgContent = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
  ${content}
</svg>`;
  fs.writeFileSync('./logo.svg', svgContent);
  console.log('Generated logo.svg');
};

module.exports = { saveSVG };
