// Score Board
const main = document.querySelector("main");
const winBoard = document.querySelector("#win");
const loseBoard = document.querySelector("#lose");
const tieBoard = document.querySelector("#tie");
const button = document.querySelectorAll("button");
let winNum = 0;
let loseNum = 0;
let tieNum = 0;
winBoard.textContent= 0;
loseBoard.textContent= 0;
tieBoard.textContent= 0;
// Global Message Variable
var winMessage ="You Win!!!"
var loseMessage ="Sorry, you Lose :("
var tieMessage ="It's a Tie."

// Computer Choice 
const option= ["r", "p", "s"];
const randomNumber= Math.floor(Math.random()* 3);
const computerChoice= option[randomNumber];
console.log(computerChoice);

// Player Choice & Game 
var userChoice ;
const pTag = document.createElement("p")
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function(event){
        console.log(event.target.value);
        userChoice = event.target.value;
       if(userChoice === computerChoice){
           pTag.textContent = tieMessage;
           main.appendChild(pTag);
           tieNum++;
           tieBoard.textContent = tieNum;
       }else if(userChoice === "r"){
           if(computerChoice === "s"){
               pTag.textContent = winMessage;
               main.appendChild(pTag);
               winNum++;
               winBoard.textContent = winNum;
           }else{
               pTag.textContent = loseMessage;
               main.appendChild(pTag);
               loseNum++;
               loseBoard.textContent = loseNum;
           }
       }else if(userChoice === "p"){
            if(computerChoice === "r"){
                pTag.textContent = winMessage;
                main.appendChild(pTag);
                winNum++;
                winBoard.textContent = winNum;
            }else{
                pTag.textContent = loseMessage;
               main.appendChild(pTag);
               loseNum++;
               loseBoard.textContent = loseNum;
            }
       }else if(userChoice === "s"){
            if(computerChoice === "p"){
                pTag.textContent = winMessage;
                main.appendChild(pTag);
                winNum++;
                winBoard.textContent = winNum;
            }else{
                pTag.textContent = loseMessage;
               main.appendChild(pTag);
               loseNum++;
               loseBoard.textContent = loseNum;
            }
        }
    })
    
}