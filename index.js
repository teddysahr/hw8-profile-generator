const inquirer = require("inquirer");
const fs = require("fs");
const generateFile = require("./generatehtml");

const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "Where are you from?",
    name: "location",
  },
  {
    type: "input",
    message: "Say a little bit about yourself...",
    name: "bio",
  },
  {
    type: "input",
    message: "What is your linkedIn username?",
    name: "linkedIn",
  },
  {
    type: "input",
    message: "What is your github username.",
    name: "github",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
  generateFile(answers);
});
