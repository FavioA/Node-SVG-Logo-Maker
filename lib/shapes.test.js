// lib/shapes.test.js
const { Triangle, Circle, Square } = require('./shapes');

test('Triangle render method', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

// Similar tests for Circle and Square
