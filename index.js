const inquirer = require('inquirer');
const fs = require('fs/promises');

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

inquirer.prompt(quests).then((answers) => {
    console.log('answers = "' + answers + '"');
    console.log('answers json = "' + JSON.stringify(answers) + '"');
    return answers;
}).then((answers) => {
    console.log('answers json after then = "' + JSON.stringify(answers) + '"');
    // TODO - normalize answers
    let outFileName = './logo.svg';
    let nonsenseContent = 'line 1';  // TODO
    nonsenseContent += '\nline 2';
    return fs.writeFile(outFileName,nonsenseContent);
}).then((writePromise) => {
    console.log('prompt kept');
    console.log('presumably logo.svg written');
}).catch((error) => {
    if (error) {
        console.log('error caught = "' + error + '"');
    } else {
        console.log('processing complete in catch');
    }
});
