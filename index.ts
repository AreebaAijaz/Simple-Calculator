#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the Operators to perform Operation",
    type: "list",
    name: "Operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if(answer.Operators === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber)
}
else if(answer.Operators === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber)
}
else if(answer.Operators === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber)
}
else if(answer.Operators === "Division"){
    console.log(answer.firstNumber / answer.secondNumber)
}
else{
    console.log("Please enter valid input")
}

console.log("THE END!")