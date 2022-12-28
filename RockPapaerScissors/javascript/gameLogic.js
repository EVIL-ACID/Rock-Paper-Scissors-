


let userScore = 0;
let computerScore = 0;
const imgRock = 'images/icons8-fist-96.png';
const imgPaper = 'images/icons8-stop-gesture-skin-type-1-96.png';
const imgScissors = 'images/icons8-hand-scissors-skin-type-1-96.png'
const options = document.querySelectorAll('.img-box');
const clearBt = document.getElementById("clear-button");

selectOPtions = {
    'Rock' : imgRock,
    'Paper' : imgPaper,
    'Scissors' : imgScissors
}; 



function getRandNumb()
{
    min = Math.ceil(1);
    max = Math.floor(3);

    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
function addComputerChoice()
{   
    const selection = document.createElement('img');
    let arrayChoices = ["Rock", "Paper", "Scissors"];
    let classBox = document.querySelector('.computer-choice');
    let randNum = getRandNumb() - 1;
    let pcChoice = selectOPtions[arrayChoices[randNum]];

    if(classBox.innerHTML.trim().length === 0)
    {
        selection.src = pcChoice;
        classBox.appendChild(selection);
    } else {
        
        classBox.lastChild.remove();
        selection.src = pcChoice;
        classBox.appendChild(selection);
    }

    return arrayChoices[randNum];
}  


function addPlayerChoice(userChoice)
{   
    let classBox = document.querySelector('.user-choice');
    const selection = document.createElement('img');
    if(classBox.innerHTML.trim().length === 0)
    {
        selection.src = selectOPtions[userChoice];
        classBox.appendChild(selection);
    }else {
        
        classBox.lastChild.remove();
        selection.src = selectOPtions[userChoice];
        classBox.appendChild(selection);
    }

    return userChoice;
}


function checkWinner(userChoice, pcChoice)
{
    const choice = {
        'Rock' : 1,
        'Paper' : 2,
        'Scissors' : 3
    }

    let winSum = choice[userChoice] + choice[pcChoice];
    const winInfo = document.getElementById("score-info");
    const userScoreID = document.getElementById("user-score");
    const computerScoreID = document.getElementById("computer-score");
    if(userChoice == pcChoice)
    {
        winInfo.innerHTML = "Tie";
    }
    else if(winSum == 3)
    {
        winInfo.innerHTML = "Paper wins";
        if(userChoice == "Paper")
        {
            userScore++;
            userScoreID.innerHTML = userScore;
        } else {
            computerScore++;
            computerScoreID.innerHTML = computerScore;
        }
    }
    else if(winSum == 4)
    {
        winInfo.innerHTML = "Rock wins";
        userScoreID.innerHTML = userScore;
        computerScoreID.innerHTML = computerScore;
        if(userChoice == "Rock")
        {
            userScore++;
            userScoreID.innerHTML = userScore;
        } else {
            computerScore++;
            computerScoreID.innerHTML = computerScore;
        }
    }
    else if(winSum == 5)
    {
        winInfo.innerHTML = "Scissor wins";
        userScoreID.innerHTML = userScore;
        computerScoreID.innerHTML = computerScore;
        if(userChoice == "Scissors")
        {
            userScore++;
            userScoreID.innerHTML = userScore;
        } else {
            computerScore++;
            computerScoreID.innerHTML = computerScore;
        }
    }
}

clearBt.addEventListener('click', () => {location.reload();});
options.forEach((div) => {
() => {}
    const pcSelection = document.createElement('img');
    div.addEventListener('click', () => {
        let playerOption = addPlayerChoice(div.id);
        let pcOption = addComputerChoice();
        checkWinner(playerOption, pcOption);

    });

  });