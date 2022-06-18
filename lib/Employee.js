// const inquirer = require("inquirer")


class Employee {
  constructor() {
    this.name
    this.id
    this.email
    this.role
  }

  getName(){

  }
  getId(){

  }

  getEmail(){

  }

  getRole() {

  }
}
  // constructor(name, id, email, role) {

  //   this.employeeName= name;
  //   this.id= id;
  //   this.email=email;
  //   this.role=role;
  // }
  // getInfo() {
  // inquirer.prompt(
  //       {
  //         type: "input",
  //         name: "employeeName",
  //         message: "What is your employee's name?",
  //       },
  //       {
  //         type: "input",
  //         name: "id",
  //         message: "What is your employee's Id?",
  //       },
  //       {
  //         type: "input",
  //         name: "email",
  //         message: "What is your employee's email?",
  //       },
  //       {
  //         type: "list",
  //         name: "role",
  //         message: ["Manager", "Engineer", "Intern"],
  //       }
  //     )

  //     .then((answers) => {
  //       console.log(answers)
  //       this.name = answers.name
  //       console.log(this.employeeName)

  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }



  // getEmail(){
  //     return inquirer
  //     .prompt(
  //         {
  //          type: "input",
  //          name: "email",
  //          message: "What is their email?",
  //                   },
  //       )
  //       .then((answer) => {
  //         return answer.email
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })

  // }

  // getRole(){
  //     return inquirer
  // .prompt(
  //     {
  //      type: "input",
  //      name: "role",
  //      message: "What is their role name?",
  //               },
  //   )
  //   .then((answer) => {
  //       console.log(answer)
  //     return answer.role
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })

  // }


// const newEmployee = new Employee()
// console.log(newEmployee)

// newEmployee.getInfo()

module.exports = Employee
