// variables
const taskTitle = document.getElementById('task-title-js');
const taskTodo = document.getElementById('task-item-js');
const addTodoBtn = document.getElementById('task-btn-js');
const addTaskBtn = document.getElementById('add-task-js');
const clearBtn = document.getElementById('clear-btn');
const listSection = document.getElementById('tasks-to-add-js');
const taskSection = document.getElementById('todo-js');
const delBtn = document.getElementById('delete-btn-js');
const urgentBtn = document.getElementById('urgent-btn-js');
let todos = [];
let tasks = [];

// event listeners
addTodoBtn.addEventListener('click', addTodo);
addTaskBtn.addEventListener('click', createTask);
taskSection.addEventListener('click', typeOfClick)
clearBtn.addEventListener('click', clearFields);

// functions

function addTodo() {
  listSection.innerHTML += `<p>${taskTodo.value}</p>`;
  tasks.push(taskTodo.value)
  taskTodo.value = '';
}

function createTask() {
  const newTodo = {title: taskTitle.value, tasks: tasks, id:Date.now(), urgent: false}
  todos.push(newTodo)
  addTask(newTodo)
  clearFields();
  tasks = [];
}

function addTask(t) {
  let todo = `<article id=${t.id} class="card">
    <h3>${t.title}</h3>
    ${t.tasks.map(a => `<p><i class="far fa-circle"></i>${a}</p>`)}
    <div class="task-btns">
    <button class="urgent-btn" id="urgent-btn-js"><i class="fas fa-exclamation"></i></button>
    <button class="delete-btn" id="delete-btn-js"><i class="far fa-times-circle"></i></button> </div>
  </article>`
  taskSection.insertAdjacentHTML('beforeend', todo)
}

function clearFields() {
  taskTitle.value = ''
  taskTodo.value = ''
  listSection.innerHTML = ''
}

function typeOfClick(e) {
  e.target.id === 'delete-btn-js' ? deleteTask(e) : urgentTask(e)
}

function deleteTask(e) {
  todos = todos.filter(t => t.id !== parseInt(e.target.parentElement.parentElement.id));
  e.target.parentElement.parentElement.remove();
}

function urgentTask(e) {
  let urgentTodo = todos.find(t => t.id === parseInt(e.target.parentElement.parentElement.id))
  urgentTodo.urgent = !urgentTodo.urgent;
  if (urgentTodo.urgent === true) {
    e.target.parentElement.parentElement.classList.add('urgent')
  } else {
    e.target.parentElement.parentElement.classList.remove('urgent')
  }
}

