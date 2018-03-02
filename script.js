console.log("Script started...");

var taskList = document.getElementById("taskList"); //assign the task list <ul> node to the taskList var
var taskTextBox = document.getElementById("taskTextBox"); //assign the new task textbox to taskTextBox var

//add eventlistener to "Add" button and pass the new task name by reading from textbox, inside an anonymouse function
document.getElementById("taskAddBtn").addEventListener("click", function() {
  addTask(taskTextBox.value);
});

//function that is invoked by anonymouse function when add button is clicked
function addTask(taskName) {
  var newTask = document.createElement("li"); //create a list item node
  var newTaskText = document.createTextNode(taskName); //create text node
  newTask.appendChild(newTaskText); //add text node to list item
  taskList.appendChild(newTask); //add list item to ul node
  taskTextBox.value = ""; //Empty the textbox after adding task
}
