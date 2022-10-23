// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require("inquirer");

const ansManager = [
    { 
        type: 'input',
        message: 'What is the UserName(Manager Name)?',
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
        message: 'What is the Office Number?',
        name: 'getOfficeNumber'
    }
]

const managerInfo = function manager() {
    inquirer.prompt(ansManager)
    .then(function(response) {
        console.log(response);
    })
}

module.exports = {
    managerInfo
}