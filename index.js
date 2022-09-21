const inquirer = require('inquirer');
const genreateTemplate = require('./src/template')
const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const { writeFile, copyFile } = require('./utils/generate-site');

const promptUser = () => {
    return inquirer.prompt ([
        {
            type:'input',
            name: 'name',
            message: 'what is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'enter your id number (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log ('please enter your in number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'enter your email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('please enter your email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'enter your GitHub username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('please enter your github username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'what is your school name? (Required)',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('please enter your school name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'enter your office number (Required)',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('please enter your office number');
                    return false;
                }
            }
        }
    ]);
};


const promptProject = portfolioData => {
    console.log(`
  =================
  Add a New Project
  =================
  `);
  
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
      portfolioData.projects = [];
    }
    return inquirer
      .prompt([
    
        {
          type: 'input',
          name: 'link',
          message: 'Enter the GitHub link to your project. (Required)',
          validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('You need to enter a project GitHub link!');
              return false;
            }
          }
        },
      ])
      .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
      });
  };
  
  promptUser()
    .then(promptProject)
    .then(portfolioData => {
      return generatePage(portfolioData);
    })
    .then(pageHTML => {
      return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
      console.log(writeFileResponse);
      return copyFile();
    })
    .then(copyFileResponse => {
      console.log(copyFileResponse);
    })
    .catch(err => {
      console.log(err);
    });
  
  




