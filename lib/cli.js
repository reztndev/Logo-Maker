// Import the libs needed for creating a CLI and file system operations
const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');

// Import the deconstructed list of shapes extended classes to instantiated the user's selected shape
const {Circle, Triangle, Square} = require('../lib/shapes.js');

let logoShape = "";

// CLI class encapsulated the inquirer prompts to capture user's choices which is invoded by the run() method
class CLI {
  constructor() {
    this.fileName = "logo.svg"
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'logoText',
          message: 'Please enter up to three characters for you (logo text):',
          validate: function(name) {
            if( name.length > 3)
                return 'You must enter up to three characters only';
            else
                return true;
          }
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Please enter a color keyword, or a hexadecimal number, for the (color of logo text):',
        },
        {
          type: 'list',
          name: 'logoShape',
          message: 'Please select the shape of your logo from the following list:',
          choices: ['Circle', 'Triangle', 'Square'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Please enter a color keyword, or a hexadecimal number, for the (color of logo shape):',
        },
      ])
      .then((answers) => {
        //console.log("answers.logoShape: ", answers.logoShape);
        switch( answers.logoShape ) {
          case 'Circle':
            logoShape = new Circle( answers.textColor, answers.logoText, answers.shapeColor );
            break;

          case 'Triangle':
            logoShape = new Triangle( answers.textColor, answers.logoText, answers.shapeColor );
            break;

          case 'Square':
            logoShape = new Square( answers.textColor, answers.logoText, answers.shapeColor );
            break;

          default:
            console.log("Error: No shape selected");
            break;
        }
        return writeFile( 
          // Create the SVG file as per user's choices for the logo and store it to the folder <examples> as logo.svg
          join(__dirname, '..', 'examples', this.fileName), logoShape.render()
        );
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}
module.exports = CLI;
