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
taskSection.addEventListener('click', deleteTask)
// clearBtn.addEventListener('click', clearTasks);

// functions

function addTodo() {
  listSection.innerHTML += `<p>${taskTodo.value}</p>`;
  tasks.push(taskTodo.value)
  taskTodo.value = '';
}

function createTask() {
  const newTodo = {title: taskTitle.value, tasks: tasks, id:Date.now()}
  todos.push(newTodo)
  addTask(newTodo)
  clearFields();
  tasks = [];
}

// function mapTasks(todos) {
//   return todos.map(t => addTask(t))
// }

function addTask(t) {
  let todo = `<article id=${t.id} class="card">
    <h3>${t.title}</h3>
    <hr>
    ${t.tasks.map(a => a)}
    <hr>
    <button class="urgent-btn" id="urgent-btn-js"><i class="fas fa-exclamation"></i></button>
    <button class="delete-btn" id="delete-btn-js"><i class="far fa-times-circle"></i></button>
  </article>`
  taskSection.insertAdjacentHTML('beforeend', todo)
}

function clearFields() {
  taskTitle.value = ''
  taskTodo.value = ''
  listSection.innerHTML = ''
}

function deleteTask(e) {
  todos = todos.filter(t => t.id !== parseInt(e.target.parentElement.id));
  taskSection.innerHTML = '';
  todos.map(t => addTask(t));
  console.log(todos)
}