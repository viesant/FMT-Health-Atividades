const newTaskField = document.querySelector("#newTask");
const btNewTask = document.querySelector("#btNewTask");
const taskList = document.querySelector("ul");
const counterField = document.querySelector("#counter");
btNewTask.addEventListener("click", addNewTask);
newTaskField.addEventListener("keydown", testEnterKey);
console.log(taskList);

let taskId = 0;
let taskCounter = 0;

function testEnterKey(e) {
  console.log(e.key);
  console.log(e);

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
}

function addNewTask() {
  // check se newTask está vazio
  if (newTaskField.value === "") {
    return;
  }
  // incrementa id da nova task
  taskId++;
function olhaCheck(e){
  console.log(e)
}
  // cria novo elemento list
  let newList = document.createElement("li");

  // cria html do item com checkbox, nome tarefa e botão excluir
  newList.innerHTML = `<input type="checkbox" name="" id="task${taskId}" onclick="olhaCheck()" /><label for="task${taskId}">${newTaskField.value}</label><button class="delete" type="button"><i class="fa-solid fa-trash"></i></button>`;
// <i class="fa-solid fa-circle-check"></i>
// <i class="fa-regular fa-circle-check"></i>
// <i class="fa-regular fa-circle"></i>
  // inclui elemento no ul
  taskList.appendChild(newList);

  // apaga valor do campo nova tarefa
  newTaskField.value = "";

  // busca botao exlcuir no novo item
  const deleteButton = newList.querySelector(".delete");

  // cria eventlistener pro novo novo botão excluir
  deleteButton.addEventListener("click", deleteTask);

  // incrementa contador
  taskCounter++;
  // altera valor campo contador
  counterField.innerHTML = taskCounter;
}

function deleteTask(event) {
  // abre confirmação para deletar
  let doDelete = confirm("Deseja apagar a tarefa da lista?");
  if (doDelete) {
    // busca item da lista
    const taskToDelete = event.target.closest("li");
    // apaga item
    taskToDelete.remove();

    // decrementa contador
    taskCounter--;
    // altera valor campo contador
    counterField.innerHTML = taskCounter;
  }
}
