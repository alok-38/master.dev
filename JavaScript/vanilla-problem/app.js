const containerEl = document.getElementById("container");

const response = await fetch("/todo_app.json");
const data = await response.json();

const ulEl = document.createElement("ul");

data.todos.forEach((item) => {
  const todoList = document.createElement("li");
  todoList.textContent = item.description;
  ulEl.appendChild(todoList);
  const checkbox = document.createElement('input');
  
});

containerEl.appendChild(ulEl);