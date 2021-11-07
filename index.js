class Manager {
  constructor(name, id, email, office) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;
  }
}

class Engineer {
  constructor(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }
}

class Intern {
  constructor(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }
}

const inquirer = require("inquirer");
const fs = require("fs");
//const generateFile = require("./__templates__/generatehtml");

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
    console.log(manager);
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

    if (memberAnswers.member === "No thanks, generate my team!")
      console.log("generate html");
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
    console.log(engineer);
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
    console.log(intern);
    choose();
    //generateFile(answers);
  });
};

init();
