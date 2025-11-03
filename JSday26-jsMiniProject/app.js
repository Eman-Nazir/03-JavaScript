var taskInput = document.getElementById('taskInput');
var addTaskBtn = document.getElementById('addTaskBtn');
var taskList = document.getElementById('taskList');

// Load tasks from local storage
function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    for (var i = 0; i < tasks.length; i++) {
        addTaskToDOM(tasks[i]);
    }
}

// Add task to the DOM
function addTaskToDOM(task) {
    var li = document.createElement('li');
    li.textContent = task;

    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';

    deleteBtn.onclick = function() {
        deleteTask(task, li);
    };
                
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Add task to local storage
function saveTask(task) {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete task from local storage and remove it from the DOM
function deleteTask(task, taskElement) {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    var updatedTasks = [];
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i] !== task) {
            updatedTasks.push(tasks[i]);
        }
    }
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    taskList.removeChild(taskElement);
}

// Add task button click event
addTaskBtn.onclick = function() {
    var task = taskInput.value;
    if (task) {
        addTaskToDOM(task);
        saveTask(task);
        taskInput.value = '';
    }
};

// Load tasks on page load
loadTasks();