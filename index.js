// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")

const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "What is the Project's Title?",
        type: "input"
    },
    {
        name: "description",
        message: "What is the Project's Description?",
        type: "input"
    },
    {
        name: "installation",
        message: "What is the Installation Process of the Project?",
        type: "input"
    },
    {
        name: "usage",
        message: "What is the Usage Instruction of the Project?",
        type: "input"
    },
    {
        name: "license",
        message: "What is the Project's License?",
        type: "list",
        choices: ["Apache", "MIT", "GNU"]
    },
    {
        name: "contribution",
        message: "How can you contribute?",
        type: "input"
    },
    {
        name: "test",
        message: "What are the Availble Tests and How to Run them?",
        type: "input"
    },
    {
        name: "questionGithub",
        message: "GitHub Profile?",
        type: "input"
    },
    {
        name: "questionEmail",
        message: "Email Address?",
        type: "input"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('File Saved!');
      })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response)=>{
        writeToFile("README.MD", generateMarkdown(response) )
    })
}

// Function call to initialize app
init();

