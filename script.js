//console.log("Script started...");
var taskList = document.getElementById("taskList"); //assign the task list <ul> node to the taskList var
var taskTextBox = document.getElementById("taskTextBox"); //assign the new task textbox to taskTextBox var
var listArea = document.getElementById("listArea");

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

//function that removes the task by receiving the unique taskid
function removeTask(taskId) {
    document.getElementById(taskId).remove();
    //console.log(itemId); 
}

//function that is invoked by anonymouse function when add button is clicked
function addTask(taskName) {
    //assigning each task a unique id which is concatenation of the task name (with spaces replaced with _) and a randonly generated number
    var taskUniqueId = taskName.replace(/ /g, "_") + String((Math.floor(Math.random() * 100) + 1)); // returns a number between 1 and 100 and concatenates it to taskname with underscores
    //create and set attributes of a checkbox element
    var newTaskCheckbox = document.createElement("input");
    newTaskCheckbox.type = "checkbox";
    newTaskCheckbox.name = taskUniqueId;
    newTaskCheckbox.value = taskName;
    newTaskCheckbox.id = taskUniqueId;
    var label = document.createElement("label");//create and set attributes of a label element to go with the checkbox
    label.htmlFor = taskUniqueId;
    label.id = "labelFor" + taskUniqueId; 
    label.appendChild(document.createTextNode(taskName));//add the task name text to the label
    //add event listener to the newly created task's checkbox to add remove functionality when checkbox status changes
    newTaskCheckbox.addEventListener("change", function(){
        removeTask(newTaskCheckbox.id);
    });
    
    var newTaskLi = document.createElement("li"); //create a list item node
    newTaskLi.id = taskUniqueId; //assign same unique task id to the li
    newTaskLi.appendChild(newTaskCheckbox); //append task checkbox to the li
    newTaskLi.appendChild(label);//append label to the li
    taskList.appendChild(newTaskLi); //add list item to ul node
    taskTextBox.value = ""; //Empty the textbox after adding task
}