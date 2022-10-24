// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require("inquirer");

const ansManager = [
    { 
        type: 'input',
        message: 'What is the UserName(Manager Name)?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is ID of this user?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the Email of this user?',
        name: 'email',
        validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (valid) {
                console.log(" confirmed");
                return true;
            } else {
                console.log(" please Enter Valid email");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the Office Number?',
        name: 'officeNumber'
    }
]

class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = 'Manager'
    }

    getRole() {
        return 'Manager';
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}


// async function getManager () {
//     const ans = await inquirer.prompt(ansManager)
//     return ans;
// }

module.exports = {
    Manager,
    ansManager
}
