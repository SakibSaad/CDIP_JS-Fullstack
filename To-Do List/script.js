document.getElementById('add-todo').addEventListener('click', function() {
    const name = document.getElementById('todo-name').value;
    const description = document.getElementById('todo-description').value;

    if (name === "" || description === "") {
        alert("Please enter both name and description");
        return;
    }

    const todoList = document.getElementById('todo-list');
    const todoItem = document.createElement('li');
    const todoInfo = document.createElement('div');
    todoInfo.classList.add('todo-info');

    const todoName = document.createElement('span');
    todoName.textContent = name;

    const todoDescription = document.createElement('span');
    todoDescription.textContent = description;

    const todoTimer = document.createElement('span');
    todoTimer.classList.add('todo-timer');
    const startTime = new Date();
    todoTimer.textContent = 'Added: ' + startTime.toLocaleTimeString();

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            todoItem.classList.add('completed');
        } else {
            todoItem.classList.remove('completed');
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(todoItem);
    });

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    buttonContainer.appendChild(checkbox);
    buttonContainer.appendChild(deleteButton);

    todoInfo.appendChild(todoName);
    todoInfo.appendChild(todoDescription);
    todoInfo.appendChild(todoTimer);
    todoItem.appendChild(todoInfo);
    todoItem.appendChild(buttonContainer);
    todoList.appendChild(todoItem);

    document.getElementById('todo-name').value = "";
    document.getElementById('todo-description').value = "";
});
