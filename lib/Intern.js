const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school =school
    }
   getSchool(){

   };
    internCard(){
        return `
        <div class="card m-5 shadow-sm" style="width: 18rem">
        <div class="card-header bg-primary text-white text-center">
            <h4 class=" mb-3 bg-primary p-1">${this.name}</h4>
            <div class="row g-0"> 
                <div class="col-5"> 
                    <i class="fa-regular fa-user-graduate fa-2x">  </i>
        </div>
        <div class="col-7"> 
            <p class="card-text fs-2">INTERN</p>
        </div>
        </div>
            
        </div>
        <div class="card-body d-flex flex-column">
            <h6 class="card-subtitle mb-3 text-muted p-1">Employee ID # ${this.id}</h6>
            <a href="mailto:${this.email}" class="p-1" target="_blank"><p> ${this.email} </p></a>
            <pclass="p-1"> ${this.school} </p>
        </div>
      </div>

        `

    };
}
module.exports = Intern;