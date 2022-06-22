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
    engineerCard (){
        return `
        <div class="card m-5 shadow-sm" style="width: 18rem">
        <div class="card-header bg-primary text-white text-center">
            <h4 class=" mb-3 bg-primary p-1">${this.name}</h4>
            <div class="row g-0"> 
                <div class="col-5"> 
                    <i class="fa-regular fa-chalkboard-user fa-2x"> </i>
        </div>
        <div class="col-7"> 
            <p class="card-text fs-2">ENGINEER</p>
        </div>
        </div>
            
        </div>
        <div class="card-body d-flex flex-column">
            <h6 class="card-subtitle mb-3 text-muted p-1">Employee ID # ${this.id}</h6>

            <a href="mailto:${this.email}" class="p-1" target="_blank"> <p> ${this.email}</p></a> 
          <p> GitHub: <a href="https://github.com/${this.github}" class= "p-1" target="_blank"> ${this.github} </a> </p>

        </div>
      </div>

        `
    }
}



module.exports = Engineer;