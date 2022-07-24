const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");
const managerCard = require("./src/managerHtml");
const engineerCard = require("./src/engineerHtml");
const internCard = require("./src/internHtml");
const employeeArray = []

const managerQuestions = [
  {
    type: "input",
    message: "What is the mangager's name?",
    name: "name",
  },
  {

    type: "input",
    message: "What is the mangager's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the mangager's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the mangager's office number?",
    name: "officeNumber",
  }
];

const engineerQuestions = [
    {
      type: "input",
      message: "What is the engineer's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the engineer's id?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the engineer's email?",
      name: "email",
    },
      
    {
      type: "input",
      message: "What is the engineer's github?",
      name: "gitHub",
    }
  ];


  const internQuestions = [
    {
      type: "input",
      message: "What is the Intern's name?",
      name: "name",
    },
    {
  
      type: "input",
      message: "What is the Intern's id?",
      name: "id",
    },
    {
  
      type: "input",
      message: "What is the Intern's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the Intern's school?",
      name: "school",
    },
  ];

function init() {
  inquirer.prompt(managerQuestions).then(managerData => {
    const { name, id, email, officeNumber } = managerData;
    const manager = new Manager(name, id, email,officeNumber);

      employeeArray.push(manager);

      confirmNext();
    });
}

function confirmNext(){
  inquirer.prompt([
      {
        type: "confirm",
        message: "Do you want add more employee? ",
        name: "addMore"
      },
    ])
    .then((addNewEmployee) => {
      const { addMore } = addNewEmployee;
      if (addMore === true) {
        return addEmployee();
      } else {
        createHTML();
      }
    })};

  function addEmployee() {

    inquirer.prompt([{
        type: "list",
        message: "Do you want to add Engineer or Intern?",
        choices: ["Engineer","Intern"],
        name: "selection"
    }])
    .then(addEmployee =>{
      const {selection} = addEmployee
        if(selection === "Engineer"){
          addEngineer()
        }
        else{
          addIntern()
        }

    })
  }

  function addEngineer() {
      inquirer.prompt(engineerQuestions)
        .then(engineerData => {
          const { name, id, email, gitHub } = engineerData;
          const engineer = new Engineer(name, id, email, gitHub);
      
            employeeArray.push(engineer);

          confirmNext()
        })
  }

  function addIntern() {
    inquirer.prompt(internQuestions)
    .then(internData => {
      const { name, id, email, school } = internData;
      const intern = new Intern(name, id, email, school);
  
        employeeArray.push(intern);

          confirmNext()
        })

  }


  function createHTML() {

    console.log(employeeArray)

    let cards =""

    for(let i = 0; i < employeeArray.length; i++
      ){
        if (employeeArray[i].getRole()==="Manager"){
          cards=cards + managerCard(employeeArray[i])
        }
        else if (employeeArray[i].getRole()==="Engineer"){cards=cards + engineerCard(employeeArray[i])

        }
        else {cards=cards + internCard(employeeArray[i])
       
      }

  }

  fs.writeFileSync("./dist/team.html", generateHTML(cards))
}

init()
