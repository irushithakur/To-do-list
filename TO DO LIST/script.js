// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task
addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();

  if (task) {
    const li = document.createElement('li');
    li.innerHTML = `
      ${task}
      <button class="deleteBtn">Delete</button>
    `;

    // Append task to the list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';

    // Add delete functionality
    li.querySelector('.deleteBtn').addEventListener('click', () => {
      li.remove();
    });
  }
});