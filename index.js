const inquirer = require('inquirer');
const fs = require("fs");
const colors = require('colors');

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Generator = require("./src/generator");
const HTMLGenerator = require("./src/HTMLGenerator");

let generatedTemplate = "";
let defaultID = 1

console.log("\n\nW e l c o m e    t o    t h e    T e a m    G e n e r a t o r\n\n".rainbow);
console.log("Created by kemaldemirgil\n\n\n".gray.dim)

const starter = () => {
  inquirer .prompt([
    {
      type: 'confirm',
      message: "Would you like to add a manager?".brightGreen,
      name: 'manager',
    },
  ])
  .then(({manager}) => {
    if(manager){
      inquirer.prompt([
        {
          type: 'input',
          message: "Please enter the team manager's name...".brightMagenta,
          name: 'name',
          validate: (value) => {if (value){return true} else {return console.log("Please enter a valid name".red.dim)}}
        },
        {
          type: 'input',
          message: "Please enter the team manager's employee ID...".brightMagenta,
          name: 'id',
          default: defaultID
        },
        {
          type: 'input',
          message: "Please enter the team manager's email address...".brightMagenta,
          name: 'email',
          validate: (value) => {if (value){return true} else {return console.log("Please enter a valid email address".red.dim)}}
        },
        {
          type: 'input',
          message: "Please enter the team manager's office number...".brightMagenta,
          name: 'office',
          validate: (value) => {if (value){return true} else {return console.log("Please enter a valid office number".red.dim)}}
        }
      ])
      .then(function({name, id, email, office}) {
        let manager = new Manager(name, id, email, office);
        let generator = new Generator();
        generatedTemplate += `${generator.manangerGenerator(manager)}`;
        menu();
      })
    } else {
      menu();
    }
  }) 
}

const menu = () => {
  defaultID++
  inquirer.prompt([
    {
      type: 'list',
      message: "Please select to add more members or end it...".brightGreen,
      name: 'menu',
      choices: ["Engineer".brightBlue, "Intern".brightYellow, "End".brightRed]
    }
  ])
  .then((response) => {
    if (response.menu === "Engineer".brightBlue) {
      engineerQuesitons();
    } else if (response.menu === "Intern".brightYellow) {
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
      message: "Please enter the engineer's name...".brightBlue,
      name: 'name',
      validate: (value) => {if (value){return true} else {return console.log("Please enter a valid name".red.dim)}}
    },
    {
      type: 'input',
      message: "Please enter the engineer's employee ID...".brightBlue,
      name: 'id',
      default: defaultID
    },
    {
      type: 'input',
      message: "Please enter the engineer's email address...".brightBlue,
      name: 'email',
      validate: (value) => {if (value){return true} else {return console.log("Please enter a valid email address".red.dim)}}
    },
    {
      type: 'input',
      message: "Please enter the engineer's Github username...".brightBlue,
      name: 'github',
      validate: (value) => {if (value){return true} else {return console.log("Please enter a valid Github username".red.dim)}}
    }
  ])
  .then(function({name, id, email, github}) {
    let engineer = new Engineer(name, id, email, github);
    let generator = new Generator();
    generatedTemplate += `\n            ${generator.engineerGenerator(engineer)}`
    menu();
  })
}

const internQuestions = () => {
  inquirer.prompt([ 
    {
      type: 'input',
      message: "Please enter the intern's name...".brightYellow,
      name: 'name',
      validate: (value) => {if (value){return true} else {return console.log("Please enter a valid name".red.dim)}}
    },
    {
      type: 'input',
      message: "Please enter the intern's employee ID...".brightYellow,
      name: 'id',
      default: defaultID
    },
    {
      type: 'input',
      message: "Please enter the intern's email address...".brightYellow,
      name: 'email',
      validate: (value) => {if (value){return true} else {return console.log("Please enter a valid email address".red.dim)}}
    },
    {
      type: 'input',
      message: "Please enter the intern's school...".brightYellow,
      name: 'school',
      validate: (value) => {if (value){return true} else {return console.log("Please enter a valid school".red.dim)}}
    }
  ])
  .then(function({name, id, email, school}) {
    let intern = new Intern(name, id, email, school);
    let generator = new Generator();
    generatedTemplate += `\n            ${generator.internGenerator(intern)}`
    menu();
  })
}

const endTeam = () => {
  const filename = `generatedTeam.html`;
  const temp = new HTMLGenerator;
  fs.writeFile("./dist/" + filename, temp.template(generatedTemplate), (err) => 
  err ? console.log(err) : console.log("\n\n\nYour team has been generated in the 'dist' folder.\nThanks for using the Team Generator!".brightGreen));
}

starter();