//Access the classes from the HTML code
let boxes = document.querySelectorAll(".box");
let resGameBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let trunO = true; //to check the player turn

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  trunO = true;
  enabledBoxes();
  msgContainer.classList.add("hide");
};

//to Disable the boxes
const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

//to Enable the boxes
const enabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (trunO) {
      //PlayerO turn
      box.innerText = "O";
      trunO = false; //after set value false as his turn is finished
    } else {
      //PLayerX turn
      box.innerText = "X";
      trunO = true; //change value to true as PlayerX turn
    }
    box.disabled = true;

    checkWinner();
  });
});

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

newGamebtn.addEventListener("click", resetGame);
resGameBtn.addEventListener("click", resetGame);
