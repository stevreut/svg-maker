const inquirer = require('inquirer');

let quests = [
    {
        type: 'input',
        name: 'topping',
        message: 'What topping would you like?'
    },
    {   type: 'list',
        name: 'size',
        choices: ['small','medium','large']
    }
];

inquirer.prompt(quests).then((answers) => {
    console.log('answers = "' + answers + '"');
    console.log('ansers json = "' + JSON.stringify(answers) + '"');
}).catch((error) => {
    if (error) {
        console.log('error caught = "' + error + '"');
    } else {
        console.log('processing complete in catch');
    }
});
