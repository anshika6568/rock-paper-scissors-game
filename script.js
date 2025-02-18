let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg-box");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper","scissor"]
   const randIdx = Math.floor(Math.random()*3)
   return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "blue";


};

const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin) {
     userScore++;
     userscore.innerText= userScore;
     msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
     msg.style.backgroundColor = "green";
  }
  else {
     compScore++
     compscore.innerText= compScore
     msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;
     msg.style.backgroundColor = "red";

  }
}


const playGame =(userChoice) => {
    console.log(userChoice);
    const compChoice = genCompChoice();
    console.log(compChoice);

    if(userChoice === compChoice){
        drawGame()
    }
    else {
        let userWin = true;
        if (userChoice==="rock") {
            userWin = compChoice=== "paper"? false : true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice=== "scissor" ? false : true;
        }
        else {
            userWin= compChoice==="rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
      const userChoice = choice.getAttribute("id");
      console.log("choice was clicked", userChoice);
      playGame(userChoice);
    });
});
