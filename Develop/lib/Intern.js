// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
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

class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = 'Intern'
    }

    getRole() {
        return 'Intern';
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

    getSchool() {
        return this.school;
    }    
}


module.exports = {
    Intern,
    ansIntern
}