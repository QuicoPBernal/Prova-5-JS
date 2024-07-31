const newTaskInput = document.getElementById("newTaskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
 
function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
 
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });
 
    const editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.addEventListener("click", () => {
      editTask(taskItem);
    });
    taskItem.appendChild(removeButton);
    taskItem.appendChild(editButton);
    taskList.appendChild(taskItem);
    newTaskInput.value = "";
  }
}
 
function editTask(taskItem) {
  const originalText = taskItem.textContent;
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = originalText;
 
  taskItem.textContent = "";
  taskItem.appendChild(editInput);
 
  const saveButton = document.createElement("button");
  saveButton.textContent = "Salvar";
  saveButton.addEventListener("click", () => {
    const newText = editInput.value.trim();
    taskItem.textContent = newText;
    taskItem.removeChild(editInput);
    taskItem.removeChild(saveButton);
  });
  taskItem.appendChild(saveButton);
}
 
addTaskButton.addEventListener("click", addTask);
