
const inquirer = require("inquirer")

const  managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your team manager's name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is your team manager's Employee ID?",
      },

      {
        type: "input",
        name: "email",
        message: "What is your team manager's email address?",
      },
      {
        type: "input",
        name: "phone",
        message: "What is your team manager's office number?",
 
      }
   
]
const isEngineer = 
{
    type: "list",
    name: "position",
    message: "Please add a team member",
    choices: ["engineer", "intern"]

  }

  const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your engineer's name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is your engineer's Employee ID?",
      },

      {
        type: "input",
        name: "email",
        message: "What is your engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your engineer's GitHub username?",
 
      }

  ]

  const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your intern's name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is your intern's Employee ID?",
      },

      {
        type: "input",
        name: "email",
        message: "What is your intern's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your engineer's school?",
 
      }

  ]


async function init() {
    return inquirer
      .prompt(managerQuestions)
      .then((answers) => {
          console.log(answers)
       
      })
      .catch((error) => {
        console.log(error)
      })
  }
  init()