//prompt the user for values vbased on questions answered
//values are assigned classes based on what question was pertaining to
//values are generated with classes in a .md file

//Useful links:
// License Badges: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
//Markdown Cheatsheet: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

//QUESTIONS:
//Project title
// Description --Description
// Install instructions -- Installation
// Usage Information -- Usage
// Contribution guidelinds -- Contributing
// test information -- Tests
// License info--License Badge
//Github Username -- Questions ->GitUser
//email address -- Questions -> email
//Table of Contents, with links to within the .md file

// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		message: "What is the title of your application?",
		name: "title",
	},
	{
		type: "list",
		message: "What license is your application using?",
		name: "license",
		choices: ["Apache", "FireFox", "GNU", "IBM", "Boost"],
	},
	{
		type: "input",
		message: "Describe your project",
		name: "description",
	},
	//TODO: REplace with each of the required information types to be referenced in the generator
	// {
	// 	type: "input",
	// 	message: "Describe your project",
	// 	name: "description",
	// },
	// {
	// 	type: "input",
	// 	message: "Describe your project",
	// 	name: "description",
	// },
	// {
	// 	type: "input",
	// 	message: "Describe your project",
	// 	name: "description",
	// },
	// {
	// 	type: "input",
	// 	message: "Describe your project",
	// 	name: "description",
	// },
	// {
	// 	type: "input",
	// 	message: "Describe your project",
	// 	name: "description",
	// },
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
	inquirer
		.prompt(questions)
		.then((data) => {
			//writing to file
			fs.writeFileSync("README.md", generateMarkdown(data));
		})
		.catch((err) => {
			if (err) throw err;
		});
}

// Function call to initialize app
init();
