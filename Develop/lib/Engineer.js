// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");

const ansEngineer = [
    { 
        type: 'input',
        message: 'What is the Engineer name?',
        name: 'getName'
    },
    {
        type: 'input',
        message: 'What is ID of this user?',
        name: 'getId'
    },
    {
        type: 'input',
        message: 'What is the Email of this user?',
        name: 'getEmail',
    },
    {
        type: 'input',
        message: 'What is the GitHub name of this user?',
        name: 'getGithub'
    }
]

const engineerInfo = function engineer() {
    inquirer.prompt(ansEngineer)
}

module.exports = {
    engineerInfo
}