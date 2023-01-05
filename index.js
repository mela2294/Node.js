// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./util/readmeGenerate.js");

// TODO: Create an array of questions for user input
const questions = [

        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project"
        },
        {
            type: "input",
            name: "installation",
            message: "Installation instructions?"
        },
        {
            type: "input",
            name: "usage",
            message: "What is the use of this project"
        },
        {
            type: "input",
            name: "contribution",
            message: "Who contribute in this project?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is you Github username?"
        },
        {
            type: "list",
            name: "license",
            message: "License?",
            choices: ["agpl", "apache", "mit", "no license"]
        }
        // {
        //     type: "input",
        //     name: "URL deployed application",
        //     message: "What is the URL deployed application?"
        // },
        // {
        //     type: "input",
        //     name: "screenshots",
        //     message: "Any screenshots?"
        // }

    ]



// TODO: Create a function to write README file
function runQuery() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const mark = generateReadme(answers)
            fs.writeFile("./output/README.md", mark, () =>  {
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

runQuery()
