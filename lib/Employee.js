// const inquirer = require("inquirer")


class Employee {
  constructor(name, id, email) {
    this.name=name;
    this.id=id;
    this.email=email;
    this.role="employee";
  }

  getName(){
    return this.name

  }
  getId(){
    return this.id

  }

  getEmail(){
    return this.email

  }

  getRole() {
    return this.role

  }
  summary(){
    return `name:${this.name}, role: ${this.role}, ID#:${this.id}, email:${this.email}`

  }
}
 






module.exports = Employee;
