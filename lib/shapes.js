// lib/shapes.js
class Shape {
  constructor() {
    this.color = '';
    this.text = '';
  }

  setColor(color) {
    this.color = color;
  }

  setText(text) {
    // Ensure only up to three characters are taken
    this.text = text.slice(0, 3);
  }

  render() {
    // Base render method in the parent Shape class
    return '';
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />${this.text && `<text x="50%" y="50%" fill="white" font-size="24" text-anchor="middle">${this.text}</text>`}`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />${this.text && `<text x="50%" y="50%" fill="white" font-size="24" text-anchor="middle">${this.text}</text>`}`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="200" height="200" fill="${this.color}" />${this.text && `<text x="50%" y="50%" fill="white" font-size="24" text-anchor="middle">${this.text}</text>`}`;
  }
}

module.exports = { Triangle, Circle, Square };
