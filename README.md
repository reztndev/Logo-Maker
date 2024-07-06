# Module 10: SVG Logo Maker

## Summary
In this challenge, we'll build a Node.js command-line application that can be used to generate an SVG logo using three basic shapes that can be selected by the user:
1. Circle
2. Triangle
3. Square

Moreover, the user will have the option of selecting the logo text, the color of the text and the color of the selected shape.  Specifically, the CLI prompts the user for the following:
1. Logo Text
2. Text Color 
3. Logo Shape
4. Shape Color

## Specifications
The logo text will be limited to three characters.  Input validation is implemeted to check for the max number of characters and prompt the user if the limit is exceeded. For the text and shape color, the user will have the choice of entering standard color strings, such as "red" or the corresponding hex value, such as #FF0000.

The SVG logo size shall be 300x200 pixel image, which when created by the program, will be written and saved as "logo.svg" in the directory (examples) from the root.The generated logo.svg can subsequently be opened and viewed in a browser. 

The program may be invoked on the command line by issuing: node index.js

## Unit Tests
A unit test using the Jest framework will be created for testing instances of each generated shape and its specified contents and attributes. The unit test files are placed in the (tests) directory from the root and may be invoked on the command line by issuing:  npm run test

The result of the unit test execution will then be displayed in the terminal.

## Implementation Technologies
The program will make use of the OOP extenstion of JavaScript by creating a "Shape" base class, and three extended class for the supported shapes: "Circle", "Triangle" and "Square".  The inheritance feature will be used by the extended classes to inherit part of the SVG specification from the base class.

Other technologies used in this application include, (Inquirer) for implmenting the CLI prompts, and Jest framework for running the unit tests.

## Recorded Video of the CLI Execution 
A recorded video of the CLI execution to illustrate the implemented requirements is available via the following link: https://app.screencastify.com/v2/manage/videos/yzv7A9MIpNTVYG1PAKoZ