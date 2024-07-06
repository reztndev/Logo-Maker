// Import the deconstructed class Square to run the test suite on it
const {Square} = require('../lib/shapes.js');

describe('Triangle', () => {
    test( 'Should retrun the constructed SVG file for a Square', () => {
        const expectedSvgSpec = [
            '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">',
            '\n\n',
            '<polygon points="70,70 210,70 210,210 70,210" fill="green" />',
            '\n\n',
            '<text x="140" y="150" font-size="50" text-anchor="middle" fill="white">SVG</text>',
            '\n\n',
            '</svg>',
        ].join('');

         // Input the test parameters matching the spec in the constructed expectedSvgSpec to pass the test
        const textColor = "white";
        const textContent = "SVG";
        const shapeFillColor = "green";

         // Instantiate the Square class and invoke its render() method to run the test
        const square = new Square(textColor, textContent, shapeFillColor);
        expect(square.render()).toEqual(expectedSvgSpec);
    });
});