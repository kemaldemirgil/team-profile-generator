const inquirer = require('inquirer');
const fs = require("fs");

const generatedHTML = (response) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${response.title}</title>
    </head>
    <body>

    </body>
  </html>`
}
console.log("~~~~~~~~~~~~~~Team Generator~~~~~~~~~~~~~~");
inquirer .prompt([
  {
    type: 'input',
    message: 'Please enter the Name of the file...',
    name: 'name',
    default: "index",
  },
  {
    type: 'input',
    message: 'Please enter the Title of the file...',
    name: 'title',
    default: "My Title",
  },
  {
    type: 'confirm',
    message: 'Do you want CSS linked to it?',
    name: 'css',
  },
  {
    type: 'confirm',
    message: 'Do you want JavaScript linked to it?',
    name: 'js',
  },
  {
    type: 'checkbox',
    message: 'Please select the libraries & frameworks for the file:',
    name: 'links',
    choices: [
    "JQuery", 
    "Bootstrap", 
    "Materialize", 
    "Font Awesome"]
  },
])

.then((response) => {
  const filename = `generatedTeam.html`;
  const template = generatedHTML(response);
  fs.writeFile("../generated-files/" + filename, template, (err) => err ? console.log(err) : console.log(`HTML Generated \n\n\nThanks for using the HTML GENERATOR created by github.com/kemaldemirgil`));
});