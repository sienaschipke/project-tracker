// DEPENDENCIES
const firstAddTaskBtn = $(".btn");
const secondAddTaskBtn = $("#task-btn");
const myModal = $("#myModal");

// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

//FUNCTIONS
// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    // event.preventDefault();
    // console.log(event);
    myModal.modal("show");
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList();
    // USER INTERACTIONS
    firstAddTaskBtn.on("click", handleAddTask);
    secondAddTaskBtn.on("click", createTaskCard);
});
