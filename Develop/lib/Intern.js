// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");

const ansIntern = [
    { 
        type: 'input',
        message: 'What is the UserName(Intern Name)?',
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
        message: 'What is the School of this user?',
        name: 'getSchool'
    }
]

const internInfo = function intern() {
    inquirer.prompt(ansIntern)
    .then(function(response) {
        console.log(response);
    })
}

module.exports = {
    internInfo
}