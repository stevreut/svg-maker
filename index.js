const inquirer = require('inquirer');
const fs = require('fs/promises');
const SVG = require('./lib/svg.js');

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
    console.log('answers = "' + answers + '"');
    console.log('answers json = "' + JSON.stringify(answers) + '"');
    return answers;
}).then((answers) => {
    console.log('answers json after then = "' + JSON.stringify(answers) + '"');
    let { inits, textColor, shape, shapeColor } = answers;
    let svg = new SVG(inits,textColor,shape,shapeColor);
    let svgStr = svg.render();
    console.log('svg rendered = "' + svgStr + '"');
    return fs.writeFile(outFileName,svgStr);
}).then((writePromise) => {
    console.log('\n\n   Generated ' + outFileName + '\n\n');
}).catch((error) => {
    if (error) {
        console.log('error encountered = "' + error + '"');
    }
});
