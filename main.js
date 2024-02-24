let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");
const msgc = document.querySelector(".msg-cg");


const genCompChoice = () => {
    const options = ["Rock","Paper","Scioors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game Draw!";
        msg.style.backgroundColor = "aquamarine";
        msgc.style.borderRadius ="3rem";
}

const showWinner = (userWin) => {
    if (userWin){
        console.log("you win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
        msgc.style.borderRadius ="3rem";

    } else {
        console.log("You lose!");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
        msgc.style.borderRadius ="3rem";

    }
}

const playGame = (userChoice) => {
    console.log("user choice =",userChoice)
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock"){
            //scioors,paper
            userWin = compChoice ==="Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = compChoice ==="Scioors" ? false : true;
        }else{
            userWin = compChoice === "Rock"  ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    
    });

});




