const input = document.getElementById('task-input');
const addButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', () => {
    const taskText = input.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('click', () => li.classList.toggle('completed'));
        taskList.appendChild(li);
        input.value = '';
    }
});
