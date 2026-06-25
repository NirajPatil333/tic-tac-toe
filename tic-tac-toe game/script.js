let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-conatiner");
let newGmaeBtn = document.querySelector("#newbtn");
let msg = document.querySelector("#msg");

let turn = true;


const winPatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];


boxes.forEach((box) =>{
    box.addEventListener("click" , () => {
        if(turn){
            box.innerText ="X";
            turn = false;
        }
        else{
            box.innerText = "O";
            turn= true;
        }
        box.disabled = true;

        checkWinner();
    });

});

const checkWinner = () => {
    for(let pattern of winPatterns){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 != "" && val2!= "" && val3!="")
            {
            if(val1 === val2 && val2 === val3)
                {
                console.log("winner",val1);
                showWinner(val1);
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};