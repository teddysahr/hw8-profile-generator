const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./__classes__/manager");
const Engineer = require("./__classes__/Engineer");
const Intern = require("./__classes__/Intern");

const managerQuestions = [
  {
    type: "input",
    message: "What is the team managers name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the manger's ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the manager's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the managers office numner?",
    name: "officenumber",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is the engineers name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the engineers's ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the engineers's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is their github username?",
    name: "github",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the intern's ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the intern's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What school do they attend?",
    name: "school",
  },
];

const teamMemberChoice = [
  {
    type: "list",
    message: "Would you like to add a new team member?",
    name: "member",
    choices: ["Engineer", "Intern", "No thanks, generate my team!"],
  },
];

const init = () => {
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    const manager = new Manager(
      `${managerAnswers.name}`,
      `${managerAnswers.id}`,
      `${managerAnswers.email}`,
      `${managerAnswers.officenumber}`
    );
    emptyArray.push(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Team Profile</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
        />
    
        <style>
          .card {
            margin-top: 30px;
          }
        </style>
      </head>
      <body>
        <section class="hero is-info">
          <div class="hero-body">
            <p class="title">Team Profile</p>
          </div>
        </section>
        <section class="section is-medium">
          <h1 class="title">Team Members</h1>`);
    emptyArray.push(`<div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${manager.name}</p>
          <p class="subtitle is-6">Manager</p>
        </div>
      </div>

      <div class="content">
        <ul>
          <li>ID: ${manager.id}</li>
          <li>Email: <a href="mailto: ${manager.email}">${manager.email}</a></li>
          <li>Office Number: ${manager.office}</li>
        </ul>
      </div>
    </div>
  </div>`);
    //console.log(manager);
    choose();
    //generateFile(answers);
  });
};

const choose = () => {
  inquirer.prompt(teamMemberChoice).then((memberAnswers) => {
    if (memberAnswers.member === "Engineer") {
      console.log(`You chose ${memberAnswers.member}`);
      getEngineerInfo();
    }

    if (memberAnswers.member === "Intern") {
      console.log(`You chose ${memberAnswers.member}`);
      getInternInfo();
    }

    if (memberAnswers.member === "No thanks, generate my team!") {
      emptyArray.push(`</section>
      </body>
    </html>`);
      //console.log("generate html");
      const arrayString = emptyArray.join("");
      fs.writeFile("sample-profile.html", arrayString, (err) =>
        err ? console.error(err) : console.log("Success! Generating HTML!")
      );
    }
  });
};

const getEngineerInfo = () => {
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
    const engineer = new Engineer(
      `${engineerAnswers.name}`,
      `${engineerAnswers.id}`,
      `${engineerAnswers.email}`,
      `${engineerAnswers.github}`
    );
    emptyArray.push(`<div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${engineer.name}</p>
          <p class="subtitle is-6">Engineer</p>
        </div>
      </div>

      <div class="content">
        <ul>
          <li>ID: ${engineer.id}</li>
          <li>Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></li>
          <li>Github Username: <a href="https://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
        </ul>
      </div>
    </div>
  </div>`);
    //console.log(engineer);
    choose();
    //generateFile(answers);
  });
};

const getInternInfo = () => {
  inquirer.prompt(internQuestions).then((internAnswers) => {
    const intern = new Intern(
      `${internAnswers.name}`,
      `${internAnswers.id}`,
      `${internAnswers.email}`,
      `${internAnswers.school}`
    );
    emptyArray.push(`<div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${intern.name}</p>
          <p class="subtitle is-6">Intern</p>
        </div>
      </div>

      <div class="content">
        <ul>
          <li>ID: ${intern.id}</li>
          <li>Email: <a href="mailto: ${intern.email}">${intern.email}</a></li>
          <li>School: ${intern.school}</li>
        </ul>
      </div>
    </div>
  </div>`);
    //console.log(intern);
    choose();
    //generateFile(answers);
  });
};

init();

const emptyArray = [];
