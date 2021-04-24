const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;

// name

// id

// email

// github

// getName()

// getId()

// getEmail()

// getGithub()

// getRole()
// returns 'Engineer'