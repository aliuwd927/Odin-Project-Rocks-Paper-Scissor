const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');
const parentEl = document.querySelector('selection');
let gamesPlayed = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
const maxTurns = (max) => {
    return computersPick = Math.floor(Math.random()*Math.floor(max));
};
const computersTurn = () => {
    let computersPick = maxTurns(3);
    return computerResult = 
        (computersPick === 0) ? 'rock':
        (computersPick === 1) ? 'paper':
        (computersPick === 2) ? 'scissor':
        '';
    /*
        let computerChoice = ['rock','paper', 'scissor'];
        let computerPick = computerChoice[Math.floor(Math.random()*Math.floor(max))];
        return computerPick;
        
    */
};
const readyPlayerOne = (e) => {
    const {value} = e.target;
    //console.log({value}); 
    switch(value){
        case 'rock':
            if(computersTurn() === 'rock'){
                alert('draw');
            } else if(computersTurn() === 'paper'){
                alert('Player 2 Score is: ' + (playerTwoScore += 1));
            }else if(computersTurn() === 'scissor'){
                alert('Player 1 Score is: ' + (playerOneScore += 1));
            }   
        break;
        case 'paper':
            if(computersTurn() === 'paper'){
                alert('draw');
            }else if(computersTurn() === 'scissor'){
                alert('Player 2 Score is: ' + (playerTwoScore += 1));
            }else if(computersTurn() === 'rock'){
                alert('Player 1 Score is: ' + (playerOneScore += 1));
            }
        break;
        case 'scissor':
            if(computersTurn() === 'scissor'){
                alert('draw');
            }else if(computersTurn() === 'rock'){
                alert('Player 2 Score is: ' + (playerTwoScore += 1));
            }else if(computersTurn() === 'paper'){
                alert('Player 1 Score is: ' + (playerOneScore += 1));
            }
        break;
    };
};
rockBtn.addEventListener('click', readyPlayerOne);
paperBtn.addEventListener('click', readyPlayerOne);
scissorBtn.addEventListener('click', readyPlayerOne);