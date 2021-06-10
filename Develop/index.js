const inquirer = require('inquirer');
const fs = require('fs');
const writeFile = require('./utils/generateMarkdown');

const questions = readmeData => {
    console.log(`=============================`);

    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter your name. (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your name.');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "title",
                message: "Enter Project Title. (Required)",
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log("Please enter a project title.")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "desc",
                message: "Enter Project Description. (Required)",
                validate: descripInput => {
                    if (descripInput) {
                        return true;
                    } else {
                        console.log("Please enter a project description.")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "inst",
                message: "Specific Installation Instructions:",
            },
            {
                type: "input",
                name: "usage",
                message: "Usage Information:",
            },
            {
                type: "input",
                name: "distGuide",
                message: "Distribution Guidelines:",
            },
            {
                type: "input",
                name: "testInst",
                message: "Test Instructions:",
            }
        ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }
// TODO: Create a function to initialize app
// Function call to initialize app
questions()
.then(data => {
    console.log("Readme Generated!")
    return writeFile(data);
});
