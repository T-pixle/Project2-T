const main = document.querySelector("main");
const win = document.querySelectorAll("#win");
const lose = document.querySelectorAll("#lose");
const tie = document.querySelectorAll("#tie");
const rock= document.querySelector("#rock");
const paper= document.querySelector("#paper");
const scissors= document.querySelector("#scissors");
var userchoice ;

var winNum = 0;
var loseNum = 0;
var tieNum = 0;
function newscore(){
    winNum;
    loseNum;
    tieNum;
}

const option= ["r", "p", "s"];
const randomNumber= Math.floor(Math.random()* 3);
const computerchoice= option[randomNumber];
console.log(computerchoice);


rock.addEventListener("click", function() {
    userchoice = "r"
    console.log("r");
}) 

paper.addEventListener("click", function() {
    userchoice = "p"
    console.log("p");
}) 

scissors.addEventListener("click", function() {
    userchoice = "s"
    console.log("s");
}) 

if(userchoice === computerChoice){
    alert(tie);
    tieNum++;
}else if(userchoice === "r"){
    if(computerChoice === "s"){
    alert(win);
    winNum++;
    newScore();
    }else{
    alert(lose);
    loseNum++;
    newScore();
    }
}else if(userchoice === "p"){
    if(computerChoice === "r"){
        alert(win);
        winNum++;
        newScore();
    }else{
        alert(lose);
        loseNum++;
        newScore();
    }
}else if(userchoice === "s"){
    if(computerChoice === "p"){
        alert(win);
        winNum++;
        newScore();
    }else{
        alert(lose);
        loseNum++;
        newScore();
    }
}
