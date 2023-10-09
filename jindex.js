const taskInput = document.getElementById('taskInput');
const addTask = document.getElementById('addTask');
const taskList = document.getElementById('taskList');


addTask.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // create new div for new task
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        // create checkbox 
        const taskCheckBox = document.createElement('input');
        taskCheckBox.type = 'checkbox'; 
        taskCheckBox.classList.add('task-checkbox')
        
        // space to add task text
        const taskTextBox = document.createElement('span');
        taskTextBox.textContent = taskText;

        // adds task div to the list and clears input field
        taskElement.appendChild(taskCheckBox)
        taskElement.appendChild(taskTextBox)

        taskList.appendChild(taskElement);

        //reset task input to empty
        taskInput.value = '';
    }
  });

taskList.addEventListener('change', (event) => {
    if (event.target.classList.contains('task-checkbox')) {
        const taskElement = event.target.parentElement;

        taskElement.classList.toggle('done');
    }
});