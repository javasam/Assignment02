let randomNum = Math.round(Math.random());
console.log("randomNum: " + randomNum);
let choice = prompt("Please enter Heads or Tails");
if (choice === "Heads") {
    if (randomNum === 0) {
        alert("The flip was heads and you chose heads...you win!")
    } else {
        alert("The flip was tails but you chose heads...you lose!")
    }
} else if (choice === "Tails") {
    if (randomNum === 0) {
        alert("The flip was heads but you chose tails...you lose!")
    } else {
        alert("The flip was tails and you chose tails...you win!")
    }
}