// タスクを追加する関数
function addTask() {
  event.preventDefault(); // フォームの送信を防止
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  var newTask = document.createElement("li");

  // タスクが未入力の場合はエラーメッセージを表示して終了する
  if (taskInput.value === "") {
    alert("タスクを入力してください");
    return;
  }

  newTask.innerText = taskInput.value;

  // Doneボタンを追加
  var doneButton = document.createElement("button");
  doneButton.innerText = "Done";
  doneButton.addEventListener("click", removeTask); // Doneボタンを押した際にremoveTaskを呼び出す
  newTask.appendChild(doneButton);

  newTask.addEventListener("click", toggleTask);
  taskList.appendChild(newTask);
  taskInput.value = "";
}

// タスクを削除する関数
function removeTask() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}

// タスクを完了する関数
function toggleTask() {
  this.classList.toggle("completed");
}
