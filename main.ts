#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

let todoList : String [] = [];
let conditions = true;

// Print welcome message
console.log(chalk.magenta.bold("\n\t Welcome to CodeWithAmmar Todo-List "));

let main = async () => {
    while (conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an Option You Want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
            
            
        ]);
        if(option.choice === "Add Task"){
            let newTask = await inquirer.prompt([
                {
                    name: "task",
                    type: "input",
                 message: "Enter Your New Task :",
                }
            ]);
        
            todoList.push(newTask.task);
            console.log(`\n ${newTask.task} Task Added Successfully in Todo-List\n`);
        }
        else if (option.choice === "Delete Task"){
            let taskIndex = await inquirer.prompt([
                {
                    name: "index",
                    type: "number",
                    message: "Enter The Index no.' Of The Task You Want To Delete:",
                }
               ]);
                let deletedTask = todoList.splice(taskIndex.index-1, 1);
                console.log(`\n ${deletedTask} This task has been deleted successfully from your Todo-List\n`);
        }
        else if (option.choice === "Update Task"){
            let update_task_index = await inquirer.prompt([
                {
                    name: "index",
                    type: "number",
                    message: "Enter The Index no' Of The Task You Want To Update:",
                },
                {
                    name: "new_task",
                    type: "input",
                    message: "Now Enter New Task Name:",
                }
            ]);
            todoList [update_task_index.index-1] = update_task_index.new_task
            console.log(`\n Task at index no. ${update_task_index.index} updated successfully [For updated list Check option: View Todo-List]`)
        }
        

        else if(option.choice === "View Todo-List"){
            console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index +1}: ${task}`)
    });
    console.log("\n");
        }
        else if(option.choice === "Exit"){
            conditions = false;
        }
    
    }


//let addTask = async () => {
    
//}

// Function to view all Todo-List Tasks
//let viewTask = () => {
    
//}

// Functions to delete a task from the list
//let deleteTask = async () => {
  // await viewTask()
   
//}

// Functions to update a task
//let updateTask = async () => {
  //  await viewTask()
    

    }
//}
main();