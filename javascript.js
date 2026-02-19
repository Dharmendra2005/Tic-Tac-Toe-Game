let button = document.querySelectorAll(".box");
let msg = document.querySelector(".msg-container");
let newgame = document.querySelector("#new-btn");
let win = document.querySelector("#win");
let reset = document.querySelector("#reset");
let turnO = true;
const winnings = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

button.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("the button was clicked");
        if(turnO){
            box.innerText = "O";
            turnO =false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msg.classList.add("hide");
};
const enableBoxes = () => {
    for (let box of button) {
      box.disabled = false;
      box.innerText = "";
    }
};
  

const showWinner = (winner) =>{
    win.innerText = `Congratulation👏, Winner is ${winner}`;
    msg.classList.remove("hide");
    for(box of button){
        box.disabled = true;
    }
};

const checkWinner = () =>{
    for(let pattern of winnings){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(button[pattern[0]].innerText, button[pattern[1]].innerText, button[pattern[2]].innerText);
        let pos1 = button[pattern[0]].innerText;
        let pos2 = button[pattern[1]].innerText;
        let pos3 = button[pattern[2]].innerText;
        if( pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner");
                showWinner(pos1);
            }
        }
    }
};
reset.addEventListener("click", resetGame);
newgame.addEventListener("click", resetGame);
