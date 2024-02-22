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
  // incrementa id da nova task
  taskId++;
  let newTask = newTaskField.value;

  let newList = document.createElement("li");
  newList.innerHTML = `<input type="checkbox" name="" id="task${taskId}" /><label for="task${taskId}">${newTask}</label><button class="delete" type="button"><i class="fa-solid fa-trash"></i></button>`;
  taskList.appendChild(newList);
  newTaskField.value = 0;
}
