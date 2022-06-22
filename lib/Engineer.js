const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
        this.role = "engineer"
        this.icon = "fa-chalkboard-user"
    }
    getGithub() {
        return this.github
        
    };

    getRole() {
        return this.role
    }

    getIcon() {
        return this.icon
    }
}



module.exports = Engineer;