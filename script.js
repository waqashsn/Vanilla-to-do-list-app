console.log("Script started...");

var taskList = document.getElementById("taskList"); //assign the task list <ul> node to the taskList var
var taskTextBox = document.getElementById("taskTextBox"); //assign the new task textbox to taskTextBox var

//add eventlistener to "Add" button and pass the new task name by reading from textbox, inside an anonymouse function
//if statement checks if textbox is empty, if its empty, task is not added.
document.getElementById("taskAddBtn").addEventListener("click", function() {
  if(taskTextBox.value != ""){
    addTask(taskTextBox.value);
  }
});

//add task to list on pressing Enter key
//add eventlistern to textbox for Enter key, call taskAddBtn click event when Enter Key is pressed. 
document.getElementById("taskTextBox").addEventListener("keyup",  function(event) {
    event.preventDefault();
    if(event.keyCode == 13) {
        document.getElementById("taskAddBtn").click();
    }
})

//function that is invoked by anonymouse function when add button is clicked
function addTask(taskName) {
  var newTask = document.createElement("li"); //create a list item node
  var newTaskText = document.createTextNode(taskName); //create text node
  newTask.appendChild(newTaskText); //add text node to list item
  taskList.appendChild(newTask); //add list item to ul node
  taskTextBox.value = ""; //Empty the textbox after adding task
}
