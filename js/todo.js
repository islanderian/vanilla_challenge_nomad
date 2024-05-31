const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list ul");

const todoArray = [];
const todoObj = {};

// Event Listener
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const listItem = document.createElement("li");
  const listName = document.createElement("span");
  const listRemove = document.createElement("span");

  listName.innerText = todoInput.value;
  listRemove.innerText = "❌";

  listItem.classList = "todo-item";
  listItem.append(listName);
  listItem.append(listRemove);
  todoList.prepend(listItem);

  todoInput.value = "";
});
