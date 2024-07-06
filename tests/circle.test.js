// Import the deconstructed class Circle to run the test suite on it
const {Circle} = require('../lib/shapes.js');

describe('Circle', () => {
    test( 'Should retrun the constructed SVG file for a Circle', () => {
        const expectedSvgSpec = [
            '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">',
            '\n\n',
            '<circle cx="150" cy="100" r="80" fill="green" />',
            '\n\n',
            '<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>',
            '\n\n',
            '</svg>',
        ].join('');
        
        // Input the test parameters matching the spec in the constructed expectedSvgSpec to pass the test
        const textColor = "white";
        const textContent = "SVG";
        const shapeFillColor = "green";

        // Instantiate the Circle class and invoke its render() method to run the test
        const circle = new Circle(textColor, textContent, shapeFillColor);
        expect(circle.render()).toEqual(expectedSvgSpec);
    });
});