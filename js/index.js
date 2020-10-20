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
    
    switch(value);


};



rockBtn.addEventListener('click', readyPlayerOne);
paperBtn.addEventListener('click', readyPlayerOne);
scissorBtn.addEventListener('click', readyPlayerOne);