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
  