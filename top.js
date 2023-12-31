// ▼背景
particlesJS("particles-js", {
  "particles":{
    "number":{
      "value":546,//この数値を変更すると星の数が増減できる
      "density":{
        "enable":true,
        "value_area":800
      }
    },
    "color":{
      "value":"#ffffff"
    },
    "shape":{
      "type":"circle",//形状はcircleを指定
      "stroke":{
        "width":0
      },
      },
    "opacity":{
      "value":1,//シェイプの透明度
      "random":true,//シェイプの透明度をランダムにする
      "anim":{
        "enable":true,//シェイプの透明度をアニメーションさせる
        "speed":3,//シェイプの透明度をアニメーションさせる
        "opacity_min":0,//透明度の最小値０
        "sync":false//全てを同時にアニメーションさせない
      }
    },
    "size":{
      "value":2,
      "random":true,
      "anim":{
        "enable":false,
        "speed":4,
        "size_min":0.3,
        "sync":false
      }
    },
    "line_linked":{
      "enable":false,
    },
    "move":{
      "enable":true,
      "speed":120,//この数値を小さくするとゆっくりな動きになる
    "direction":"none",//方向指定なし
    "random":true,//動きはランダムに
    "straight":true,//動きをとどめる
      "out_mode":"out",
      "bounce":false,
      "attract":{
        "enable":false,
        "rotateX":600,
        "rotateY":600
      }
    }
  },
  "interactivity":{
    "detect_on":"canvas",
    "events":{
      "onhover":{
        "enable":false,
      },
      "onclick":{
        "enable":false,
      },
      "resize":true
    }
  },
  "retina_detect":true
});



// ▼Todo

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

