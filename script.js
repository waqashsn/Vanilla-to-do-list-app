console.log("Script started...");

//add eventlistener to "Add" button
document.getElementById("taskAddBtn").addEventListener("click", addTask);

var taskList = document.getElementById("taskList"); //assign the task list <ul> node to the taskList var
var taskTextBox = document.getElementById("taskTextBox"); //assign the new task textbox to taskTextBox var

//function that is invoked when add button is clicked
function addTask(){
      
    var newTask = document.createElement("li"); //create a list item node
    var newTaskText = document.createTextNode(taskTextBox.value); //create text node
    newTask.appendChild(newTaskText); //add text node to list item
    taskList.appendChild(newTask); //add list item to ul node
    taskTextBox.value = ""; //Empty the textbox after adding task
}
