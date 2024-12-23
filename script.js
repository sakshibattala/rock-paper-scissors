let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You won! Your ${userChoice} beats Computer's ${compChoice}!`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost! Computer's ${compChoice} beats Your ${userChoice}!`;
    msg.style.backgroundColor = "red";
  }
}

const drawGame = () => {
  msg.innerText = "Game was draw! play again.";
  msg.style.backgroundColor = '#153B50';
}


const playGame = (userChoice, compChoice) => {
  if (userChoice === compChoice){
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock"){
      //paper, scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper"){
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
}

const getCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  let randomidx = Math.floor(Math.random() * 3);
  return options[randomidx];
}


choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute("id");
    const compChoice = getCompChoice();
    console.log(userChoice, compChoice);
    
    playGame(userChoice, compChoice);
  })
});