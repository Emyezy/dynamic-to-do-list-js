document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn'; // required: className not classList

        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }

    // ✅ Required by task
    addButton.addEventListener('click', addTask);

    // ✅ Required by task: use keypress and event.ke
