// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util")
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown");
const { Z_FIXED } = require("zlib");
// const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title? (Required)',
            validate: projectTitleInput => {
                if(projectTitleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: "checkbox",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your project about? (Required)',
            validate: installationInput => {
                if(installationInput) {
                    return true;
                } else {
                    console.log('Tell us about your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'How do you install your project? (Required)',
            validate: installationInput => {
                if(installationInput) {
                    return true;
                } else {
                    console.log('Tell us how to install your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is this project used for? (Required)',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log('Tell us the usage of this proejct!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'features',
            message: 'If applicable, please provide list the features of the project.',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'If applicable, please provide guidelines on how other can contribute to your project.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'If applicable, provide any tests written for your application and provide examples on how to run them.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'If applicable, provide your email for contact.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'If applicable, provide your github ID for contribution',
        }
    ]).then((answers) => {

        fs.writeFile('READMD.md', generateReadme(answers),
            (err) => err? console.error(err) : console.log('You successfully created README.md file!')
        );

    })
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeToFile(fileName, data, err => {
//         if (err) {
//             console.log(err);
//             return;
//         } else {
//             console.log('You successfully created README.md file!')
//         }
//     })
// };

// TODO: Create a function to initialize app
// function promptUser() {};

// Function call to initialize app
promptUser();