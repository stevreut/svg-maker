const inquirer = require('inquirer');
const fs = require('fs/promises');
const SVG = require('./lib/svg.js');

// Question array passed to inquirer.prompt
let quests = [
    {
        type: 'input',
        name: 'inits',
        message: 'What are your initials? (no more than 3)?'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What should be the color of the initials? (can be color name or color hex code)'
    },
    {   type: 'list',
        name: 'shape',
        choices: ['circle','square','triangle'],
        message: 'Choose a shape for the background'
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Color of background shape (can be color name or color hex code)'
    }
];

let outFileName = 'logo.svg';

inquirer.prompt(quests).then((answers) => {
    // Inquirer prompts the user (via run-line dialog) for answers to each
    // of four questions enumerated in array quests[] and returns all the
    // answers thereto in a single 'answers' object.
    return answers;
}).then((answers) => {
    // Destructure the resulting answers
    let { inits, textColor, shape, shapeColor } = answers;
    // Use the resulting values to render an SVG STRING (not file)
    let svg = new SVG(inits,textColor,shape,shapeColor);
    let svgStr = svg.render();
    // Write the resulting SVG string to file outFileName.
    return fs.writeFile(outFileName,svgStr);
}).then((writePromise) => {
    // If write was successful then confirm to the console.
    console.log('\n\n   Generated ' + outFileName + '\n\n');
}).catch((error) => {
    if (error) {
        console.log('error encountered = "' + error + '"');
    }
});
