
const employees = []
const HTML = []

const inquirer = require("inquirer")
const fs = require('fs')
const Manager = require ('./lib/Manager')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHTML = require('./src/generateHTML')
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
      let theManager = new Manager(answers.name, answers.id,answers.email, answers.phone)
      employees.push(theManager)
      // HTML.push(theManager.managerCard())
      askTypeofUser(answers)
   
      
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
      // const finalHTML = createHTML()
      // console.log(HTML.join(''))
    const finalHTML = generateHTML(employees)
  
     writeToFile('index.html', finalHTML)
     return;
    }
   
}

function engineersQuestions(){
   return inquirer.prompt(engineerQuestions).then((answers) => {
        answers.role = "engineer"
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employees.push(newEngineer)
        // HTML.push(newEngineer.engineerCard())
        askTypeofUser(answers)
           
        //  console.log(HTML)
  
        
   })
}

function internsQuestions(){
    return inquirer.prompt(internQuestions).then((answers) => {
        answers.role = "intern"
        const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
        employees.push(newIntern)
        // HTML.push(newIntern.internCard())
        askTypeofUser(answers)



      })
}


const writeToFile = (fileName, data)=> {
  if (!fs.existsSync('output')) {
    fs.mkdirSync('output');
  }
  fs.writeFileSync(`./output/${fileName}`, data, (err)=>
  err? console.log(err): console.log('Commit Logged')
  )
}

const init = () => {
  askUser()

}
init()

