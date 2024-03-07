const newTaskField = document.querySelector("#newTask");
const btAdd = document.querySelector("#btAddNewTask");

btAdd.addEventListener("click", addNewTask);

function addNewTask() {
  if (!newTaskField.value) {
    alert("campo vazio");
    return;
  }
  let newTask = {
    task: newTaskField.value,
    done: false,
  };

  const taskList = getTaskList();
  taskList.push(newTask);

  localStorage.setItem("taskList", JSON.stringify(taskList));
}

function getTaskList() {
  const tasks = localStorage.getItem("taskList");

  if (!!tasks) {
    return JSON.parse(tasks);
  }
  return [];
}