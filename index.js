//prompt the user for values vbased on questions answered
//values are assigned classes based on what question was pertaining to
//values are generated with classes in a .md file

//Useful links:
// License Badges: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
//Markdown Cheatsheet: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
//QUESTIONS:
const questions = [
	//Project title
	{
		type: "input",
		message: "What is the title of your application?",
		name: "title",
	},
	// License info--License Badge
	{
		type: "list",
		message: "What license is your application using?",
		name: "license",
		choices: ["Apache 2.0", "Mozilla 2.0", "GNU GPL v3", "IBM", "Boost"],
	},
	// Description --Description
	{
		type: "input",
		message: "Describe your project",
		name: "description",
	},
	// Install instructions -- Installation
	{
		type: "input",
		message: "Describe the installation instructions",
		name: "installation",
	},
	// Usage Information -- Usage
	{
		type: "input",
		message: "Outline the usage information",
		name: "usage",
	},
	// Contribution guidelinds -- Contributing
	{
		type: "input",
		message: "Outline the contribution guidelines",
		name: "contribute",
	},
	// test information -- Tests
	{
		type: "input",
		message: "Detail testing information",
		name: "test",
	},
	//Github Username -- Questions ->GitUser
	{
		type: "input",
		message: "What is your GitHub username?",
		name: "github",
	},
	//email address -- Questions -> email
	{
		type: "input",
		message: "What is your email address?",
		name: "email",
	},
	//prompt template
	// {
	// 	type: "input",
	// 	message: "Describe your project",
	// 	name: "description",
	// },
];

function init() {
	inquirer
		.prompt(questions)
		.then((data) => {
			//writing to file
			fs.writeFileSync("./readMeFile/README.md", generateMarkdown(data));
		})
		.catch((err) => {
			if (err) throw err;
		});
}

// Function call to initialize app
init();
