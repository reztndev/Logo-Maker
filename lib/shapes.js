// The base class Shape encapsulates the first line of specification in the SVG file that is inherited by the extended classes
class Shape {
    constructor() {
    
        this.svcSpec = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    }
    renderSvcSpec() {
        return this.svcSpec;
    }
}

// Extended classes below retrive the passed in choices by the user and construct the SVG for the selected shape
class Circle extends Shape {
    constructor(textColor, textContent, shapeFillColor) {
        super();    
        this.textColor = textColor;
        this.textContent = textContent;
        this.shapeFillColor = shapeFillColor;
        
        this.circleSpec = `<circle cx="150" cy="100" r="80" fill="${this.shapeFillColor}" />`;
        this.textSpec = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>`;
    }

    render() {
        // Return the constructed SVG file as per user's choices
        return super.renderSvcSpec().concat('\n\n')
        .concat(this.circleSpec).concat('\n\n')
        .concat(this.textSpec).concat('\n\n')
        .concat('</svg>');
    }
}

class Triangle extends Shape {
  constructor(textColor, textContent, shapeFillColor) {
    super();
    this.textColor = textColor;
    this.textContent = textContent;
    this.shapeFillColor = shapeFillColor;
      
      this.triangleSpec = `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeFillColor}" />`;
      this.textSpec = `<text x="150" y="140" font-size="45" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>`;
  }

  render() {
      return super.renderSvcSpec().concat('\n\n')
      .concat(this.triangleSpec).concat('\n\n')
      .concat(this.textSpec).concat('\n\n')
      .concat('</svg>');
  }
}

class Square extends Shape {
  constructor(textColor, textContent, shapeFillColor) {
    super();
    this.textColor = textColor;
    this.textContent = textContent;
    this.shapeFillColor = shapeFillColor;
      
      this.squareSpec = `<polygon points="70,70 210,70 210,210 70,210" fill="${this.shapeFillColor}" />`;
      this.textSpec = `<text x="140" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>`;
  }

  render() {
    return super.renderSvcSpec().concat('\n\n')
    .concat(this.squareSpec).concat('\n\n')
    .concat(this.textSpec).concat('\n\n')
    .concat('</svg>');
  }
}

module.exports = {Circle, Triangle, Square}
