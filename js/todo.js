const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list ul");

let todoArray = [];
const TODO_ITEMS = "todo-items";

function paintItem(inputObj) {
  const listItem = document.createElement("li");
  const listName = document.createElement("span");
  const listRemove = document.createElement("button");

  listName.innerText = inputObj.value;
  listRemove.innerText = "❌";

  listItem.classList = "todo-item";
  listItem.id = inputObj.id;

  listItem.append(listName);
  listItem.append(listRemove);
  todoList.prepend(listItem);

  listRemove.addEventListener("click", (e) => {
    const delList = e.target.parentElement;

    todoArray = todoArray.filter((item) => item.id !== parseInt(delList.id));
    delList.remove();

    console.log(todoArray);
    saveTodos();
  });
}
function saveTodos() {
  const saveItem = JSON.stringify(todoArray);
  localStorage.setItem(TODO_ITEMS, saveItem);
}

// Event Listener
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // const inputItem = todoInput.value;
  const itemObj = {
    id: Date.now(),
    value: todoInput.value,
  };

  todoInput.value = "";

  todoArray.push(itemObj);
  paintItem(itemObj);
  saveTodos();
});

const savedItems = JSON.parse(localStorage.getItem(TODO_ITEMS));
if (savedItems) {
  savedItems.forEach(paintItem);
  todoArray = savedItems;
}
