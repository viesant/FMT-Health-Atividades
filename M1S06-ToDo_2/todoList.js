const newTaskField = document.querySelector("#newTask");
const btNewTask = document.querySelector("#btNewTask");
const taskList = document.querySelector("ul");
btNewTask.addEventListener("click", addNewTask);
console.log(taskList);

let taskId = 0;

function addNewTask() {
  // check se newTask está vazio
  if (newTaskField.value === "") {
    return;
  }
  taskId++;
  let newTask = newTaskField.value;

  let newList = document.createElement("li");
  newList.innerText = newTask;

  taskList.appendChild(newList);
}
