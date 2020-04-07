// fs is a Node standard library package for reading and writing files
var fs = require("fs");
// var inquirer = require("inquirer"); or
const inquirer = require('inquirer');
// for api call
const axios = require("axios");

// or .prompt if above I say {prompt}
inquirer.prompt([
  // {
  //   name: "subject",
  //   type: "list",
  //   message: "Choose a question below...",
  //   choices: [
      {
        type: "input",
        message: "What is your Github username?",
        name: "username",
      },
      {
        message: "What is your Project's Title?",
        name: "title",
        type: "input",
      },
      {
        message: "Please write a brief Description of your project",
        name: "description",
        type: "input",
      },
      // {
      //   name: "table of Contents",
      //   type: "list",
      //   message: "Table of contents?",
      //   default: "Installation, ???"
      // },
      {
        message: "What command should be run to install dependencies?",
        name: "installation",
        type: "input",
      },
      {
        message: "What does the user need to know about contributing to the repo?",
        name: "usage",
        type: "input",
      },

      {
        message: "Select from lisences below, if there is none select the unlicense",
        name: "lisence",
        type: "list",
        choices: ["MIT", "APCHE 2.0", "GPL 3.0", "BSD 3","None"]
        // choices: ["MIT", "Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause Simplified license", "BSD 3-clause New or Revised license", "BSD 3-clause Clear license", "Creative Commons license family", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Educational Community License v2.0", "GNU Affero General Public License v3.0", "GNU General Public License family", "Microsoft Public License", "Mozilla Public License 2.0", "The Unlicense"]
      },
      {
        message: "Enter the usernames of contributers to this project",
        name: "contributer",
        type: "input",
      },
      {
        message: "What command should be run to run tests?",
        name: "tests",
        type: "input",
      },
      // {
      //   message: "Enter questions for your project?",
      //   name: "questions",
      //   type: "input",
      // }
    // ]
  // }
])
// .then(function (response) {
//   const queryUrl = `https://api.github.com/users/${response.username}`;
//   //github call
//   axios
//     .get(queryUrl)
//     .then(function (githubResponse) {
//       //grab email and profile picture from api 
//       const email = githubResponse.data.email;
//       const pfpURL = githubResponse.data.avatar_url;

    
//     });
//   });
.then(function(data){
// this was saying that tolowercase is undefined
  // let filename = data.name.toLowerCase().split(' ').join('')+ ".md"; ;
  fs.writeFile(`${data.name}.md`, JSON.stringify(data, null, '\t')
  , function(err){

    if(err){
      return console.log (err);
    
    }
    console.log("readme generated")
  });
});



