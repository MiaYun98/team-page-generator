const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./Engineer")
const Intern = require("./Intern")
const Manager = require("./Manager")
const generateHtmljs = require("../util/generateHtml")

var employeeArr = []; 

// chosing function 
const addingEmployee = [
    {
        type: 'list',
        message: 'Job of the person you want to add',
        name: 'title',
        choices: ['Engineer', 'Intern', 'Done']
    }
]

function chosingJobTitle() {
    inquirer.prompt(addingEmployee).then((ans) => {
        if(ans.title === 'Engineer') {
            getEngineer(ans.title); 
        } else if (ans.title === 'Intern') {
            getIntern(ans.title);
        } else if (ans.title === 'Done') {
            return generatefile();
        }
    })
}

// Manager prompt 
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

async function getManager () {
    await inquirer.prompt(ansManager).then((ans)=> {
        const employee = new Manager(
            ans.name,
            ans.id,
            ans.email,
            ans.officeNumber
        );
        employeeArr.push(employee)
        console.log(employeeArr)
        chosingJobTitle();
    });
    
}

// Engineer prompt
const ansEngineer = [
    { 
        type: 'input',
        message: 'What is the UserName(Engineer name?)',
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
        message: 'What is the GitHub name of this user?',
        name: 'github'
    }
]

async function getEngineer () {
    await inquirer.prompt(ansEngineer).then((ans) => {
        const employee = new Engineer(
            ans.name,
            ans.id,
            ans.email,
            ans.github
        );
        employeeArr.push(employee)
        chosingJobTitle();
    })
}

// Intern prompt
const ansIntern = [
    { 
        type: 'input',
        message: 'What is the UserName(Intern Name)?',
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
        message: 'What is the School of this user?',
        name: 'school'
    }
]

async function getIntern () {
    await inquirer.prompt(ansIntern).then((ans) => {
        const employee = new Intern(
            ans.name,
            ans.id,
            ans.email,
            ans.school
        );
        employeeArr.push(employee)
        chosingJobTitle();
    })
}

// starter
const init = async () => {
    try {
        await getManager();
    } catch(err) {
        console.log(err)
    }
}

function generatefile() {
    fs.writeFile("./example/index.html", generateHtmljs(employeeArr), (err) => 
    err ? console.error(err) : console.log('saved!'))
}

// init program
init();

