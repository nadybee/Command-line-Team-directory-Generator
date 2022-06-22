
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
  fs.writeFileSync(fileName, data, (err)=>
  err? console.log(err): console.log('Commit Logged')
  )
}

const createHTML =()=>{
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=?, initial-scale=1.0" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
      integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
      crossorigin="anonymous"
    />
    <script
      src="https://kit.fontawesome.com/4f1341bf20.js"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="/assets/style.css" />

    <title>Team Profile Generator</title>
  </head>
  <body>
    <header>
      <div class="navbar bg-danger justify-content-center mb-5">
        <h1 class="text-white">My Team</h1>
      </div>
    </header>
    <div class="d-flex flex-wrap justify-content-center" id="employee-cards">`
    +
    HTML.join('')
    +
    `
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF"
      crossorigin="anonymous"
    ></script>
    <script src="index.js"></script>
  </body>
</html>


  `
}
const init = () => {
  askUser()

}
init()

