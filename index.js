const inquirer = require('inquirer');
const fs = require("fs");
const colors = require('colors');

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Generator = require("./src/generator");

let generatedTemplate = "";

// console.log('This is rainbow'.rainbow);
console.log("~~~~~~~~~~~~~~Team Generator~~~~~~~~~~~~~~");

const starter = () => {
  inquirer .prompt([
    {
      type: 'input',
      message: "Please enter the team manager's name...",
      name: 'name',
    },
    {
      type: 'input',
      message: "Please enter the team manager's employee ID...",
      name: 'id',
    },
    {
      type: 'input',
      message: "Please enter the team manager's email address...",
      name: 'email',
    },
    {
      type: 'input',
      message: "Please enter the team manager's office number...",
      name: 'office',
    }
  ])
  .then(function({name, id, email, office}) {
    let manager = new Manager(name, id, email, office);
    let generator = new Generator();
    generatedTemplate += generator.manangerGenerator(manager);
    console.log(generatedTemplate);

    menu();
  })
}



const menu = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: "Please select to add more members or end it...",
      name: 'menu',
      choices: ["Engineer", "Intern", "End"]
    }
  ])
  .then((response) => {
    if (response.menu === "Engineer") {
      engineerQuesitons();
    } else if (response.menu === "Intern") {
      internQuestions();
    } else {
      endTeam();
    }
  })
}


const engineerQuesitons = () => {
  inquirer.prompt([ 
    {
      type: 'input',
      message: "Please enter the engineer's name...",
      name: 'name',
    },
    {
      type: 'input',
      message: "Please enter the engineer's employee ID...",
      name: 'id',
    },
    {
      type: 'input',
      message: "Please enter the engineer's email address...",
      name: 'email',
    },
    {
      type: 'input',
      message: "Please enter the engineer's Github username...",
      name: 'github',
    }
  ])
  .then(function({name, id, email, github}) {
    let engineer = new Engineer(name, id, email, github);
    let generator = new Generator();
    generatedTemplate += generator.engineerGenerator(engineer)
    console.log(generatedTemplate);

    menu();
  })
}



const internQuestions = () => {
  inquirer.prompt([ 
    {
      type: 'input',
      message: "Please enter the intern's name...",
      name: 'intern-name',
    },
    {
      type: 'input',
      message: "Please enter the intern's employee ID...",
      name: 'intern-id',
    },
    {
      type: 'input',
      message: "Please enter the intern's email address...",
      name: 'intern-email',
    },
    {
      type: 'input',
      message: "Please enter the intern's school...",
      name: 'intern-school',
    }
  ])
  .then(() => {
    menu();
  })
}

const htmlGenerator = (users) => {
  return  `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="./template.css">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
      <title>Team Profile Generator</title>
    </head>
    <body>
      <div class="jumbotron text-center">
          <h1>Team Profile Generator</h1>
      </div>
      <div class="container">
        <div class="row">
          ${users}
        </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
  </html>
  `
}




const endTeam = () => {
  const filename = `generatedTeam.html`;
  fs.writeFile("./dist/" + filename, htmlGenerator(generatedTemplate), (err) => console.log(err));
}




starter();

