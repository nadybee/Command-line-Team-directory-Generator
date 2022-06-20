
const employees = []
const HTML = []
const inquirer = require("inquirer")
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')

const employeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter the name",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the Employee ID?",
  },

  {
    type: "input",
    name: "email",
    message: "Please enter the email address?",
  },
]

const managerQuestions = [
  ...employeeQuestions,

  {
    type: "input",
    name: "phone",
    message: "Please enter the phone number?",
  },
  {
    type: "list",
    name: "next",
    message: "who would you like to add next?",
    choices: ["engineer", "intern", "none"],
  },
]
const engineerQuestions = [
  ...employeeQuestions,

  {
    type: "input",
    name: "github",
    message: "What is their GitHub username?",
  },
  {
    type: "list",
    name: "next",
    message: "who would you like to add next?",
    choices: ["engineer", "intern", "none"],
  },
]

const internQuestions = [
  ...employeeQuestions,

  {
    type: "input",
    name: "school",
    message: "What is their school?",
  },
  {
    type: "list",
    name: "next",
    message: "who would you like to add next?",
    choices: ["engineer", "intern", "none"],
  },
]

async function askUser() {
  inquirer
    .prompt(managerQuestions)
    .then((answers) => {
      answers.role = "manager"
      employees.push(answers)
      // console.log(` this is the position ` + answers.role)
      console.log(employees)
      askTypeofUser(answers)
      const firstEmployee = new Employee(employees[0].name, employees[0].id, employees[0].email, employees[0].role)
      console.log(firstEmployee.summary())

    })
    

    .catch((error) => {
      console.log(error)
    })
}

function askTypeofUser(type){
    if (type.next==="engineer" ){

engineersQuestions()


    }
    else if(type.next ==="intern"){
        internsQuestions()

    }
    else if(type.next=="none"){
     return;
    }

}

function engineersQuestions(){
   return inquirer.prompt(engineerQuestions).then((answers) => {
        answers.role = "engineer"
        employees.push(answers)
     
        askTypeofUser(answers)
        const firstEmployee = new Engineer(employees[1].name, employees[1].id, employees[1].email, employees[1].role, employees[1].github)
        console.log(firstEmployee.engineerCard())
      
           HTML.push(new Engineer(answers.name, answers.id, answers.email, answers.role, answers.email))
           
         console.log(HTML)
  
        
   })
}

function internsQuestions(){
    return inquirer.prompt(internQuestions).then((answers) => {
        answers.role = "intern"
        employees.push(answers)
        console.log(employees)
        askTypeofUser(answers)



      })
}

const init = () => {
  askUser()

}

init()
