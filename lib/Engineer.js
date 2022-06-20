const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, position, github){
        super(name, id, email, position)
        this.github = github
    }
    getGithub() {
        return this.github
        
    };
    engineerCard (){
        console.log(`Employee: ${this.name}, id: ${this.id}, position: ${this.position}, email: ${this.email}, github username: ${this.github}`)

    }
}



module.exports = Engineer;