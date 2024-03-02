// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md file generated!')
)};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'Please enter your email address',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Please enter a description of your project',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'What is the usage information?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Please enter contribution guidelines',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'Please enter test instructions',
            name: 'tests'
        },
        {
            type: 'list',
            message: 'Please select a license',
            name: 'license',
            choices: [
                {
                    name: 'MIT',
                },
                {
                    name:'APACHE 2.0',                
                },
                {
                    name:'GPL 3.0',                
                },
            ],
        },
    ])
    .then((data) => {
        const fileName = "README.md";
        const content = generateMarkdown(data);
        writeToFile(fileName, content);
    });
}

// Function call to initialize app
init();
