// Mengambil elemen HTML yang dibutuhkan
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Fungsi untuk menambahkan task ke dalam list
function addTask(task) {
  const listItem = document.createElement('li');
  const taskText = document.createElement('span');
  taskText.textContent = task;

  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('actions');

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => editTask(taskText));

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete');
  deleteButton.addEventListener('click', () => deleteTask(listItem));

  actionsDiv.appendChild(editButton);
  actionsDiv.appendChild(deleteButton);

  listItem.appendChild(taskText);
  listItem.appendChild(actionsDiv);
  todoList.appendChild(listItem);
}

// Fungsi untuk menghapus task
function deleteTask(listItem) {
  todoList.removeChild(listItem);
}

// Fungsi untuk mengedit task
function editTask(taskText) {
  const newTask = prompt('Edit your task:', taskText.textContent);
  if (newTask) {
    taskText.textContent = newTask;
  }
}

// Event listener untuk form submit
todoForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const task = todoInput.value.trim();
  if (task !== '') {
    addTask(task);
    todoInput.value = '';
  }
});
