// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
const fs = require("fs");
const engineer = require("./Engineer")
const intern = require("./Intern")
const manager = require("./Manager")

// const e = new Employee(); 
function asking() {
    inquirer.prompt([{
        type: 'list',
        message: 'Choose the employee you want to add',
        name: 'title',
        choices: ['Manager','Engineer', 'Intern','Done']
    }]).then((data) => {
        job(data.title)
    })
    
} 

function job(title) { async () => {
    try {
        if(title === 'Manager') {
            manager.managerInfo();
        } else if (title === 'Engineer') {
            engineer.engineerInfo();
        } else if (title === 'Intern') {
            intern.internInfo();
        } else if (title === 'Done') {
            return;
        }
    } catch (err) {
        console.log(err)
    }
}}

function init() {
    asking();
}

init();