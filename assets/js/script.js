// DEPENDENCIES
const firstAddTaskBtn = $(".btn-success");
const secondAddTaskBtn = $(".btn-primary");
const myModal = $("#formModal");
const taskTitleEl = $("#task-title");
const taskDateEl = $("#task-date");
const taskDescriptionEl = $("#task-description");
const todoCardsEl = $("#todo-cards");

// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

//FUNCTIONS
// Todo: create a function to generate a unique task id
function generateTaskId() {
    return crypto.randomUUID();
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    console.log(task);
    const tagCard = $(`<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-header">${task.title}</h5>
      <p class="card-text">${task.description}</p>
      <p class="card-date">${dayjs(task.date).format('MM/DD/YY')}</p>
      <a href="#" class="btn btn-primary">Delete</a>
    </div>
  </div>`);
    todoCardsEl.append(tagCard);
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();
    
    let task = {
        id: generateTaskId(),
        title: taskTitleEl.val(),
        date: taskDateEl.val(),
        description: taskDescriptionEl.val()
    };
    
    createTaskCard(task);
    myModal.modal('hide');
    taskTitleEl.val(''),
    taskDateEl.val(''),
    taskDescriptionEl.val('')
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
    firstAddTaskBtn.on("click", function() {
        myModal.modal("show");
    });
    secondAddTaskBtn.on("click", handleAddTask);
});
