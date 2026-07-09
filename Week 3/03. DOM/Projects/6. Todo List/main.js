let form = document.querySelector("form");
let input = document.querySelector("input");
let todos = document.querySelector(".todos");

function getTodo(value) {

  let todo = document.createElement("div");

  let textEl = document.createElement("span");
  textEl.innerHTML = value;

  let closeEl = document.createElement("span");
  closeEl.innerHTML = "&times;";

  // Add classes
  todo.classList.add("todo");
  closeEl.classList.add("delete");

  // Build structure
  todo.appendChild(textEl);
  todo.appendChild(closeEl);

  // Attach event
  closeEl.addEventListener("click", () => {
    todos.removeChild(todo);
  });

  return todo;
}

form.addEventListener("submit", (e) => {
  // preventing the default behavior
  e.preventDefault();
  let value = input.value;
  if (!value.trim()) return;
  todos.appendChild(getTodo(value));
  input.value = "";
});
