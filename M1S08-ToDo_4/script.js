const newTaskField = document.querySelector("#newTask");
const btNewTask = document.querySelector("#btNewTask");
const taskList = document.querySelector("ul");
const counterFinished = document.querySelector("#counterFinished");
const counterTotal = document.querySelector("#counterTotal");

btNewTask.addEventListener("click", addNewTask);
newTaskField.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "Enter":
      addNewTask();
      break;
    case "Escape":
      newTaskField.value = "";
      break;
    default:
      break;
  }
});

function addNewTask() {
  // check se newTask está vazio
  if (newTaskField.value === "") {
    return;
  }

  let newTask = {
    task: newTaskField.value,
    done: false,
  };

  const tasks = getTaskList();

  if (tasks.some((item) => item.task === newTask.task)) {
    alert("Essa tarefa já existe!");
    return;
  }

  tasks.push(newTask);

  setTaskList(tasks);
  newTaskField.value = "";
  renderTaskList();
}

function deleteTask(taskToDelete) {
  let doDelete = confirm("Deseja apagar a tarefa da lista?");
  if (doDelete) {
    let tasks = getTaskList();
    tasks = tasks.filter((item) => item.task != taskToDelete);

    setTaskList(tasks);
    renderTaskList();
  }
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
  tasks = getTaskList();
  taskList.innerHTML = "";
  tasks.forEach((item) => {
    let li = `<li>
      <input 
       type="checkbox" 
       name="" 
       id="${item.task}" 
       ${item.done ? "checked" : ""}
       onclick="toggleTaskStatus('${item.task}')"
      />
      <label for="${item.task}">
        ${item.task}
      </label>
      <button
       class="delete"
       type="button"
       onclick="deleteTask('${item.task}')"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    </li>`;
    taskList.innerHTML += li;
  });

  const doneTasks = tasks.filter((item) => item.done);
  // altera valor campo contador finalizadas
  counterFinished.innerHTML = doneTasks.length;

  // altera valor campo contador total
  counterTotal.innerHTML = tasks.length;
}

renderTaskList();
