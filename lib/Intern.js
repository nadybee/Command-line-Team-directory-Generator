const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school =school
        this.role = 'intern'
        this.icon = "fa-user-graduate"
    }
   getSchool(){

   };

   getRole(){
       return this.role
   }

   getIcon(){
       return this.icon
   }
}
module.exports = Intern;