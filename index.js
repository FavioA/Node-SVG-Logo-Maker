// index.js
const { promptUser } = require('./lib/inquirerPrompt');
const { Triangle, Circle, Square } = require('./lib/shapes');
const { saveSVG } = require('./lib/fileHandler');

const generateLogo = async () => {
  const userInput = await promptUser();

  // Create the corresponding shape based on user input
  let shape;
  switch (userInput.shape) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      console.error('Invalid shape');
      return;
  }

  shape.setColor(userInput.shapeColor);
  shape.setText(userInput.text); // Set the text for the logo

  const svgContent = shape.render(); // Call the render method

  saveSVG(svgContent);
};

generateLogo();

