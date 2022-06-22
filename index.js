const employees = []

const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const generateHTML = require("./src/generateHTML")
const employeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter the name",
    validate: function (name) {
      if (name.length) {
        return true
      } else {
        return "Please enter a name"
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the Employee ID?",
    validate: function (id) {
      if (id.length) {
        if (isNaN(id)) {
          return "Please enter a valid ID number"
        } else {
          return true
        }
      } else {
        return "please enter a valid ID number"
      }
    },
  },

  {
    type: "input",
    message: "What is the email address?",
    name: "email",
    validate: function (email) {
      if (email.length) {
        if (
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            email
          )
        ) {
          return true
        } else {
          return "please enter a valid email"
        }
      } else {
        return "please enter a valid email"
      }
    },
  },
]

const managerQuestions = [
  ...employeeQuestions,

  {
    type: "input",
    name: "phone",
    message: "Please enter the phone number(10 digit, no spaces)?",
    validate: function (phone) {
      if (phone.length) {
        if (
          /^[0-9]{10}$/.test(phone)
        ) {
          return true
        } else {
          return "Please enter a valid 10 digit, no spaces phone #"
        }
      }
      else{
        return  "Please enter a valid 10 digit, no spaces phone #"
      }
    },
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
    validate: function(github){
      if(github.length){
        return true
      }
      else {
        return 'cannot be blank'
      }
    }
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
    validate: function(school){
      if(school.length){
        return true
      }
      else {
        return 'cannot be blank'
      }
    }
  },
  {
    type: "list",
    name: "next",
    message: "who would you like to add next?",
    choices: ["engineer", "intern", "none"],
  },
]

async function askUser() {
  console.log(` WELCOME to Team Profile Generator! \n
  First enter the manager info, the you can add the rest of your team.
  We will create a index.html file for you in the output folder \n`)

  inquirer
    .prompt(managerQuestions)
    .then((answers) => {
      let theManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.phone
      )
      theManager.getRole()
      employees.push(theManager)
      // HTML.push(theManager.managerCard())
      askTypeofUser(answers)
    })

    .catch((error) => {
      console.log(error)
    })
}

function askTypeofUser(type) {
  if (type.next === "engineer") {
    engineersQuestions()
  } else if (type.next === "intern") {
    internsQuestions()
  } else if (type.next == "none") {
    // const finalHTML = createHTML()
    // console.log(HTML.join(''))
    const finalHTML = generateHTML(employees)

    writeToFile("index.html", finalHTML)
    return
  }
}

function engineersQuestions() {
  return inquirer.prompt(engineerQuestions).then((answers) => {
   
    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    )
    newEngineer.getRole()
    employees.push(newEngineer)
    askTypeofUser(answers)

  })
}

function internsQuestions() {
  return inquirer.prompt(internQuestions).then((answers) => {

    const newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    )
    newIntern.getRole()
    employees.push(newIntern)
    // HTML.push(newIntern.internCard())
    askTypeofUser(answers)
  })
}

const writeToFile = (fileName, data) => {
  if (!fs.existsSync("output")) {
    fs.mkdirSync("output")
  }
  fs.writeFileSync(`./output/${fileName}`, data, (err) =>
    err ? console.log(err) : console.log("Commit Logged")
  )
}

const init = () => {
  askUser()
}
init()
