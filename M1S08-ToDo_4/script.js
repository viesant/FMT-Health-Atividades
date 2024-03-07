const newTaskField = document.querySelector("#newTask");
const btAdd = document.querySelector("#btAddNewTask");
const taskListField = document.querySelector("#taskList");

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
  renderTaskList();
}

function deleteTask(taskToDelete) {
  let taskList = getTaskList();
  taskList = taskList.filter((item) => item.task != taskToDelete);

  setTaskList(taskList);
  renderTaskList();
}

function toggleTaskStatus(taskToChange) {
  let taskList = getTaskList();
  taskList.forEach((item) => {
    if (item.task === taskToChange) {
      item.done = !item.done;
    }
  });

  setTaskList(taskList);
  renderTaskList();
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

function renderTaskList() {
  taskList = getTaskList();
  taskListField.innerHTML = "";
  taskList.forEach((item) => {
    let li = `<li>${item.task}</li>`;
    taskListField.innerHTML += li;
  });
}

renderTaskList();
