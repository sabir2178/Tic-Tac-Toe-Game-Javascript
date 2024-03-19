let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO= true;//playerX, playerY 

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame =() =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turnO){
            //playero
            box.innerText = "O";
            turnO =false;
        }
        else{
            //playerX
            box.innerText = "X";
            turnO = true
        }
        box.disabled=true;
         
        checkWinner ();
    });
});
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}

const showWinner =(winner)=>{
    msg.innerText=`congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Va = boxes[pattern[0]].innerText;
        let pos2Va = boxes[pattern[1]].innerText;
        let pos3Va = boxes[pattern[2]].innerText;

        if (pos1Va != "" && pos2Va != "" && pos3Va != ""){
            if(pos1Va ===pos2Va && pos2Va===pos3Va){
                console.log("winner",pos1Va);

                showWinner(pos1Va);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);


