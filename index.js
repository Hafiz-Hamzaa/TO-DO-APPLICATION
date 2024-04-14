#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.green("<==========> Welcome to my Todo Application!! <==============>"));
let todos = [];
let condition = true;
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([{
                name: "choices",
                type: "list",
                message: chalk.bold.magenta("Select one of the option to perform to-do list"),
                choices: ["Add Task", "Deleted Task", "View-To do list", "Exit"]
            }]);
        if (option.choices === "Add Task") {
            await addTask();
        }
        else if (option.choices === "Deleted Task") {
            await deletedTask();
        }
        else if (option.choices === "View-To do list") {
            await viewTask();
        }
        else if (option.choices === "Exit") {
            condition = false;
            exit();
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([{
            name: "task",
            type: "input",
            message: chalk.bold.yellow("What do you want to add in your to do list :")
        }]);
    todos.push(newTask.task);
    console.log(`${newTask.task}`);
};
let viewTask = () => {
    console.log(chalk.bold.yellow("Your To-do list"));
    console.log(todos);
};
let exit = () => {
    console.log(chalk.bold.yellow("Thanks for using my To do list application"));
};
let deletedTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([{
            name: "index",
            type: "number",
            message: chalk.bold.yellow("Enter the index no you want to delte it :")
        }]);
    let deletedTask = todos.splice(taskIndex.index, 1);
    console.log(chalk.bold.yellow(`Finally Your Task should be deleted ${deletedTask} if you confirm that task should be deleted go to option of view to do list`));
};
main();
