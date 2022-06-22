const Employee = require('./Employee')
class Manager extends Employee {
    constructor(name, id, email, phone){
        super(name, id, email)
        this.phone =phone;
        this.role = 'manager'
        this.icon = 'fa-clipboard-user'
    }
   
    getPhone(){
        return this.phone
        

    };

    getRole() {
        return this.role;
    }

    getIcon(){
       return this.getIcon
    }
 

}

module.exports = Manager;