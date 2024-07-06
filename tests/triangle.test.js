// Import the deconstructed class Triangle to run the test suite on it
const {Triangle} = require('../lib/shapes.js');

describe('Triangle', () => {
    test( 'Should retrun the constructed SVG file for a Triangle', () => {
        const expectedSvgSpec = [
            '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">',
            '\n\n',
            '<polygon points="150, 18 244, 182 56, 182" fill="green" />',
            '\n\n',
            '<text x="150" y="140" font-size="45" text-anchor="middle" fill="white">SVG</text>',
            '\n\n',
            '</svg>',
        ].join('');

         // Input the test parameters matching the spec in the constructed expectedSvgSpec to pass the test
        const textColor = "white";
        const textContent = "SVG";
        const shapeFillColor = "green";

        // Instantiate the Triangle class and invoke its render() method to run the test
        const triangle = new Triangle(textColor, textContent, shapeFillColor);
        expect(triangle.render()).toEqual(expectedSvgSpec);
    });
});