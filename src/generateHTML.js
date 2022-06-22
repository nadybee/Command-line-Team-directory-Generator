const createHTML = (employees) => {

  const cards = createCards(employees)
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
      <div class="d-flex flex-wrap justify-content-center" id="employee-cards">
   ${cards}
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

const createCards = (employees) => {
    let cardHTML=[]
    let special

  for(let e=0; e<employees.length; e++) { 
    let managerSpecial = `<p>  tel: <a href="tele:${employees[e].phone}" class="p-1" target="_blank"> ${employees[e].phone} </a> </p>`
    let engineerSpecial = `<p> GitHub: <a href="https://github.com/${employees[e].github}" class= "p-1" target="_blank"> ${employees[e].github} </a> </p>`
    let internSpecial = `<p class="p-1"> school: ${employees[e].school} </p>`

    if (employees[e].role === "manager") {
      special = managerSpecial
    }
    if (employees[e].role === "engineer") {
      special = engineerSpecial
    }
    if (employees[e].role === "intern") {
      special = internSpecial
    }
      cardHTML.push(
        ` <div class="card m-5 shadow-sm" style="width: 18rem">
        <div class="card-header bg-primary text-white text-center">
            <h4 class=" mb-3 bg-primary p-1">${employees[e].name}</h4>
            <div class="row g-0"> 
                <div class="col-5"> 
                    <i class="fa-regular ${employees[e].icon} fa-2x">  </i>
        </div>
        <div class="col-7"> 
            <p class="card-text fs-2">${employees[e].role.toUpperCase()}</p>
        </div>
        </div>
            
        </div>
        <div class="card-body d-flex flex-column">
            <h6 class="card-subtitle mb-3 text-muted p-1">Employee ID # ${
                employees[e].id
            }</h6>
            <a href="mailto:${employees[e].email}" class="p-1" target="_blank"><p> ${
                employees[e].email
        } </p></a>
            ${special}
            
        </div>
      </div>`
    )}
     
  return cardHTML.join('')
    }

const generateHTML = (employees) => {
  return createHTML(employees)
}

module.exports = generateHTML
