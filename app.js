const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const render = require("./lib/htmlRenderer");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

let team = []

//prompts for certain roles
const manager = [
  {
    type: "input",
    name: "managerName",
    message: "Manager's Name:",
  },
  {
    type: "input",
    name: "managerId",
    message: "Manager's ID:",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Manager's Email:",
  },
  {
    type: "input",
    name: "managerOffice",
    message: "Manager's Office number:",
  },
]

const engineer = [
  {
    type: "input",
    name: "engineerName",
    message: "Engineer's Name:",
  },
  {
    type: "input",
    name: "engineerId",
    message: "Engineer's ID:",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "Engineer's Email:",
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "Engineer's Github Username:",
  },
]

const intern = [
  {
    type: "input",
    name: "internName",
    message: "Intern's Name:",
  },
  {
    type: "input",
    name: "internId",
    message: "Intern's ID:",
  },
  {
    type: "input",
    name: "internEmail",
    message: "Intern's Email:",
  },
  {
    type: "input",
    name: "internSchool",
    message: "Intern's School:",
  },
]

inquirer
  .prompt(manager)
  .then(ans => {
    console.log(ans)
    team.push(new Manager(ans.managerName, ans.managerId, ans.managerEmail, ans.managerOffice))
    chooseTeam()
  })

const chooseTeam = () => {
  inquirer
    .prompt([{
      type: "list",
      name: "teamType",
      choices: ["Engineer", "Intern", "Done adding team members"],
      message: "Choose a team member to add to your team"
    }])
    .then(data => {
      switch (data.teamType) {
        case "Engineer":
          chooseEngineer()
          break
        case "Intern":
          chooseIntern()
          break
        default:
          createTeam()
      }
    })
}

const chooseEngineer = () => {
  inquirer
    .prompt(engineer)
    .then(ans => {
      console.log(ans)
      team.push(new Engineer(ans.engineerName, ans.engineerId, ans.engineerEmail, ans.engineerGithub))
      chooseTeam()
    })
}

const chooseIntern = () => {
  inquirer
    .prompt(intern)
    .then(ans => {
      console.log(ans)
      team.push(new Intern(ans.internName, ans.internId, ans.internEmail, ans.internSchool))
      chooseTeam()
    })
}

const createTeam = () => {
  console.log('Team page created!')
  // console.log(render(team))
  render(team)
  fs.writeFile('index.html', render(team), function (err) {
    if (err) { console.log(err) }
  })
}
