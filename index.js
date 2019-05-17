// variables
const taskTitle = document.getElementById('task-title');
const taskTodo = document.getElementById('task-item-js');
const addTodoBtn = document.getElementById('task-btn-js');
const addTaskBtn = document.getElementById('add-task-js');
const clearBtn = document.getElementById('clear-btn');
const listSection = document.getElementById('tasks-to-add-js');
const taskSection = document.getElementById('todo-js');
const todos = [];

// event listeners
addTodoBtn.addEventListener('click', addTodo);
addTaskBtn.addEventListener('click', addTask);
clearBtn.addEventListener('click', clearTasks);

// functions

function appendTodos(array) {
  const displayTodos = array.map(t => {
    new Todo(t.title, t.tasks, t.id, t.urgent)
  })
}

function addTodo() {
  listSection.append(taskTodo.value);
}

function addTask(task) {
  taskSection.innerHTML += `<article class="card">
  <h3>${task.title}</h3>
  <hr>
  <li>${task.todo}</li>
  <hr>
  <button><i class="fas fa-exclamation"></i></button>
  <button><i class="far fa-times-circle"></i></button>
</article>`
}