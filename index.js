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

function validHexColor(color) {
    if (color === undefined || color === null || color.trim() === '') {
        return false;
    }
    if (color.length != 7 && color.length != 4) {
        return false;
    }
    if (color.charAt(0) !== '#') {
        return false;
    }
    for (let i=1;i<color.length;i++) {
        let ch = color.charAt(i);
        if (!((ch >= 'A' && ch <= 'F') ||
              (ch >= 'a' && ch <= 'f') ||
              (ch >= '0' && ch <= '9'))) {
                return false;
        }
    }
    return true;
}

function validateColor(color, colorLabel) {
    color = color.trim().toLowerCase();
    if (color.length < 3) {
        console.log('\n\nInvalid color ' + color + ' on ' + colorLabel + ' replaced with black\n');
        color = 'black';
        return color;
    } else if (color.charAt(0) === '#') {
        if (!validHexColor(color)) {
            console.log('\n\nInvalid hex color ' + color + ' on ' + colorLabel + ' replaced with black\n');
            color = 'black';
            return color;
        } else {
            return color;
        }
    } else {
        return color;  // TODO - more validation would be nice
    }
}

inquirer.prompt(quests).then((answers) => {
    console.log('answers = "' + answers + '"');
    console.log('answers json = "' + JSON.stringify(answers) + '"');
    return answers;
}).then((answers) => {
    console.log('answers json after then = "' + JSON.stringify(answers) + '"');
    let { inits, textColor, shape, shapeColor } = answers;
    inits = inits.trim().toUpperCase();
    if (inits.length === 0) {
        console.log('\n\nNo initials entered, defaulting to XYZ\n');
        inits = 'XYZ';
    } else if (inits.length > 3) {
        console.log('\n\nToo many initials entered, will be truncated\n');
        inits = inits.substring(0,3);
    }
    textColor = validateColor(textColor, 'text color');
    shapeColor = validateColor(shapeColor, 'shape color');
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
