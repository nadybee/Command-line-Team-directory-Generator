console.log('connected')
const employees = []
const inquirer = require("inquirer")


const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter the name",
      },
      {
        type: "input",
        name: "ID",
        message: "Please enter the Employee ID?",
      },

      {
        type: "input",
        name: "email",
        message: "Please enter the email address?",
      }
  
   
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
          choices: ["engineer", "intern","none"]
      }

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
        choices: ["engineer", "intern","none"]
    }
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
        choices: ["engineer", "intern","none"]
    }

  ]


async function askUser() {
    return inquirer
      .prompt(managerQuestions)
      .then((answers) => {
          answers.position = 'manager'
          if (answers.next ==="none"){
            employees.push(answers)
            console.log(employees)
        }
        else if (answers.next ==="engineer"){
         return inquirer
         .prompt (engineerQuestions)
         .then ((answers)=> {
             answers.position = 'engineer'
             employees.push(answers)
            console.log(employees)})
     }
     else if (answers.next === "intern"){
        return inquirer
        .prompt (internQuestions)
        .then ((answers)=> {
            answers.position = "intern"
            employees.push(answers)
           console.log(employees)})
     }
       
      })

      .catch((error) => {
        console.log(error)
      })
      
    }

    
const init=()=>{
    askUser()
   
}

init()

