// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
// const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'Please enter your email address',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
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
                {
                    name:'BSD 3',                
                },
                {
                    name:'None',                
                },
            ],
        },
     
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
