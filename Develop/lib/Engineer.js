// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const ansEngineer = [
    { 
        type: 'input',
        message: 'What is the Engineer name?',
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

class Engineer {
    constructor (name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = 'Engineer'
    }

    getRole() {
        return 'Engineer';
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

    getGithub() {
        return this.github;
    }

}

module.exports = {
    ansEngineer,
    Engineer
}