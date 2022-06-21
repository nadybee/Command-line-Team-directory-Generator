const Employee = require('./Employee')
class Manager extends Employee {
    constructor(name, id, email, phone){
        super(name, id, email)
        this.phone =phone;
    }
   
    getPhone(){
        return this.phone
        

    };
 

    managerCard() {
        return `
        <div class="card m-5 shadow-sm" style="width: 18rem">
        <div class="card-header bg-primary text-white text-center text-bold">
            <h4 class=" mb-3 bg-primary p-1">${this.name}</h4>
            <div class="row g-0"> 
                <div class="col-5"> 
            <i class="fa-regular fa-clipboard-user fa-2x ">  </i>
        </div>
        <div class="col-7"> 
            <p class="card-text"> MANAGER </p>
        </div>
        </div>
            
        </div>
        <div class="card-body d-flex flex-column">
            <h6 class="card-subtitle mb-3 p-1 text-muted">Employee ID # ${this.id}</h6>
           
            <a href="mailto:${this.email}" class="p-1" target="_blank"><p> ${this.email} </p></a>
            <a href="tele:${this.phone}" class="p-1" target="_blank"><p>  tel: ${this.phone}</p></a>


        </div>
      </div>

        `

    }
}

module.exports = Manager;