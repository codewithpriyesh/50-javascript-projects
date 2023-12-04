function loadTaskFromLocalStorage() {
  const savedTask = JSON.parse(localStorage.getItem("taskList"));
  if (savedTask) {
    savedTask.forEach((taskText) => {
      createTask(taskText);
    });
  }
}

function createTask(taskText) {
  const taskList = document.getElementById("taskList");
  const div = document.createElement("div");
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");
  const updateButton = document.createElement("button");

  // adding classes to buttons
  deleteButton.classList.add("fa-regular", "fa-trash-can");
  editButton.classList.add("fa-regular", "fa-pen-to-square");
  updateButton.classList.add("fa-solid", "fa-arrow-up-from-bracket");

  //adding content inside div element
  div.innerText = taskText;

  // appending div element to li element
  li.appendChild(div);

  //appending button to li
  li.appendChild(deleteButton);
  li.appendChild(editButton);

  //appending li element
  taskList.appendChild(li);

  div.onclick = function () {
    div.classList.toggle("completed");
  };

  //delete the task
  deleteButton.onclick = function () {
    taskList.removeChild(li);
    removeTaskFromLocalStorage(taskText);
  };

  //edit the task
  editButton.onclick = function () {
    //create an input element and asign the taskText to it's value
    const input = document.createElement("input");
    input.type = "text";
    input.value = taskText;
    input.id = "updateInputBox";
    li.replaceChild(input, div);
    li.appendChild(updateButton);
  };

  updateButton.onclick = function () {
    const updatedTaskInput = document.getElementById("updateInputBox");
    updateToLocalStorage(taskText, updatedTaskInput.value);
  };
}

//function to add task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  if (taskInput.value !== "") {
    createTask(taskInput.value);
    saveTaskToLocalStorage(taskInput.value);
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}

// function to save data in local storage
function saveTaskToLocalStorage(task) {
  let tasks;

  if (localStorage.getItem("taskList") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("taskList"));
  }

  if (!tasks.includes(task)) {
    tasks.push(task);
    localStorage.setItem("taskList", JSON.stringify(tasks));
  }
}

// function to update the task in local storage
function updateToLocalStorage(oldTask, newTask) {
  const savedTask = JSON.parse(localStorage.getItem("taskList"));

  console.log(savedTask, "before");

  const index = savedTask.findIndex((el) => el === oldTask);
  savedTask[index] = newTask;

  localStorage.setItem("taskList", JSON.stringify(savedTask));
  console.log(savedTask, "after after");
  location.reload();
}

// Function to remove a task from local storage
function removeTaskFromLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("taskList"));

  if (tasks.includes(task)) {
    const updatedTasks = tasks.filter(function (item) {
      return item !== task;
    });

    localStorage.setItem("taskList", JSON.stringify(updatedTasks));
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loadTaskFromLocalStorage();
});
