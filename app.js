let boxes = document.querySelectorAll(".box"); // hr ek box ko select karo 
let resetbtn = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg-container")
let newGamebtn = document.querySelector("#new-btn")
let msg = document.querySelector("#msg")

let cnt = 0 ; // for the draw condition 
let turnO = true; // we have two player => X and O 

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

// Reset game functionality  => Triggeref=d when newGamebtn is clicked
const resetGame = () => {
    turnO = true
    enableBoxes();
    msgContainer.classList.add("hide") 
}


boxes.forEach((box) => {
    box.addEventListener("click" ,()=>{
        // On click every box perfom the task listed here         
        if(turnO){
            box.innerHTML = "O"
            turnO = false
            box.style.color="darkslategrey"
            cnt = cnt+1;
            console.log(cnt);
        }
        else{
            box.innerHTML="X"
            turnO = true
            box.style.color = "lightyellow"
            cnt = cnt+1;
            console.log(cnt);
        }
        box.disabled = true; // means jab bhi click karege toh abb value change nahi hoge.

        checkWinner();
        if(cnt === 9){
            draw();
            cnt=0;
        }
    });
});

// After the winner is decleared Further click on the boxes are disabled 
// Function to disable the boxes 
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

//To enable the boxes function 
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulation ! Winner is ${winner}`;
    // Now we disable the hide class
    msgContainer.classList.remove("hide"); 
    disableBoxes();
    cnt = 0;
};

const draw = () => {
    msg.innerText = `Match Draw . Let's Play Again `;
    msgContainer.classList.remove("hide"); 
    disableBoxes();
}

const checkWinner = () => {
    // loop on the winpattern 
    for(let pattern of winpattern){
        // return the individual array from the 2-D array winpattern 
        // Extract the value(inner text from that ) 
        // Traverse through the all winpattern and check the condition 
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText

        if(pos1val !="" && pos2val!="" && pos3val !="")
        {
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
}

// Adding the event listener on the buttons => to reset the game 
newGamebtn.addEventListener("click" , resetGame); // resetGame -> is the function call 
resetbtn.addEventListener("click" , resetGame)


