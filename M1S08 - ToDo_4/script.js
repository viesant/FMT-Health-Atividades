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
  if (taskList.some((item) => item.task === newTask.task)) {
    alert("Essa tarefa já existe!");
    return;
  }
  taskList.push(newTask);

  setTaskList(taskList);
}

function getTaskList() {
  const tasks = localStorage.getItem("taskList");

  if (!!tasks) {
    return JSON.parse(tasks);
  }
  return [];
}
function setTaskList(taskList) {
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

function toggleTaskStatus(taskToChange) {
  const taskList = getTaskList();
  taskList.forEach((item) => {
    if (item.task === taskToChange) {
      item.done = !item.done;
    }
  });
  setTaskList(taskList);
}
