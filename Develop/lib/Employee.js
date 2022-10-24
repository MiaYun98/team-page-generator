// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
const fs = require("fs");
const Engineerjs = require("./Engineer")
const Internjs = require("./Intern")
const Managerjs = require("./Manager")
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
async function getManager () {
    await inquirer.prompt(Managerjs.ansManager).then((ans)=> {
        const employee = new Managerjs.Manager(
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
async function getEngineer () {
    await inquirer.prompt(Engineerjs.ansEngineer).then((ans) => {
        const employee = new Engineerjs.Engineer(
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
async function getIntern () {
    await inquirer.prompt(Internjs.ansIntern).then((ans) => {
        const employee = new Internjs.Intern(
            ans.name,
            ans.id,
            ans.email,
            ans.school,
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

