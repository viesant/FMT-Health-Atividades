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

  // cria novo elemento list
  let newList = document.createElement("li");

  // cria html do item com checkbox, nome tarefa e botão excluir
  newList.innerHTML = `<input type="checkbox" name="" id="task${taskId}" /><label for="task${taskId}">${newTaskField.value}</label><button class="delete" type="button"><i class="fa-solid fa-trash"></i></button>`;

  // inclui elemento no ul
  taskList.appendChild(newList);

  // apaga valor do campo nova tarefa
  newTaskField.value = "";

  // busca botao exlcuir no novo item
  const deleteButton = newList.querySelector(".delete");

  // cria eventlistener pro novo novo botão excluir
  deleteButton.addEventListener("click", deleteTask);
}

function deleteTask(event) {
  // abre confirmação para deletar
  let doDelete = confirm("Deseja apagar a tarefa da lista?");
  if (doDelete) {
    // busca item da lista
    const taskToDelete = event.target.closest("li");
    // apaga item
    taskToDelete.remove();
  }
}
