(function() {
    // Create a simple HTML structure using JavaScript
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.margin = '20px';
    document.body.style.backgroundColor = '#f4f4f4';

    const title = document.createElement('h1');
    title.innerText = 'Simple To-Do List';
    title.style.textAlign = 'center';
    document.body.appendChild(title);

    const inputContainer = document.createElement('div');
    inputContainer.style.display = 'flex';
    inputContainer.style.justifyContent = 'center';
    inputContainer.style.marginBottom = '20px';
    document.body.appendChild(inputContainer);

    const inputField = document.createElement('input');
    inputField.placeholder = 'Add a new task';
    inputField.style.padding = '10px';
    inputField.style.flexGrow = '1';
    inputField.style.marginRight = '10px';
    inputContainer.appendChild(inputField);

    const addButton = document.createElement('button');
    addButton.innerText = 'Add';
    addButton.style.padding = '10px 20px';
    inputContainer.appendChild(addButton);

    const taskList = document.createElement('ul');
    taskList.style.listStyleType = 'none';
    taskList.style.padding = '0';
    taskList.style.maxWidth = '600px';
    taskList.style.margin = '0 auto';
    document.body.appendChild(taskList);

    // Function to add a task
    function addTask() {
        const taskText = inputField.value.trim();
        if (taskText) {
            const taskItem = document.createElement('li');
            taskItem.innerText = taskText;
            taskItem.style.backgroundColor = '#fff';
            taskItem.style.margin = '5px 0';
            taskItem.style.padding = '10px';
            taskItem.style.borderRadius = '5px';
            taskItem.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';

            // Create a remove button for each task
            const removeButton = document.createElement('button');
            removeButton.innerText = 'Remove';
            removeButton.style.marginLeft = '10px';
            removeButton.style.backgroundColor = '#e74c3c';
            removeButton.style.color = 'white';
            removeButton.style.border = 'none';
            removeButton.style.cursor = 'pointer';
            removeButton.onclick = function() {
                taskList.removeChild(taskItem);
            };

            taskItem.appendChild(removeButton);
            taskList.appendChild(taskItem);
            inputField.value = '';
        }
    }

    // Event listener for the add button
    addButton.onclick = addTask;

    // Allow pressing Enter to add a task
    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Welcome message
    const welcomeMessage = document.createElement('p');
    welcomeMessage.innerText = 'Welcome! You can add tasks to your to-do list.';
    welcomeMessage.style.textAlign = 'center';
    document.body.appendChild(welcomeMessage);
})();
