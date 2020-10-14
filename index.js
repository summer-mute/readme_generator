// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const gM = require("./generateMarkdown.js")

const questions = inquirer
  .prompt([
    {
      type: "input",
      message: "Title?",
      name: "title",
    },
    {
      type: "input",
      message: "Description?",
      name: "description",
    },
    {
      // TODO this should allow multiple intputs
      type: "input",
      message: "Table of Content?",
      name: "table_of_contents",
    },
    {
      type: "input",
      message: "Installation?",
      name: "installation",
    },
    {
      type: "input",
      message: "Usage?",
      name: "usage",
    },
    {
      type: "input",
      message: "License?",
      name: "license",
    },
    {
      type: "input",
      message: "Contributing?",
      name: "contributing",
    },
    {
      type: "input",
      message: "Tests?",
      name: "tests",
    },
    {
      type: "input",
      message: "Questions?",
      name: "questions",
    },
  ])
  .then((response) => {
    console.log(response);
    const filename = README_DEMO.md;
    fs.appendFile(filename, gM(response), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(response);
      }
    });
  });

