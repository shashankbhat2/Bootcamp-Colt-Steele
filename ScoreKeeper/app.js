const reset = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#winningscore')

let winningScore = 3;
let isGameOver = false;


const playerOne = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1score')
}

const playerTwo = {
    score: 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2score')
}

function updateScore (player, opponent){
    if(!isGameOver){
        player.score++;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}
//Events
playerOne.button.addEventListener('click', function(e){
   updateScore(playerOne,playerTwo)
})

playerTwo.button.addEventListener('click', function(e){
    updateScore(playerTwo,playerOne)
})

reset.addEventListener('click', resetGame)

function resetGame(e){
    isGameOver = false;
    //Inefficient Method
    // playerOne.score = 0;
    // playerTwo.score = 0;
    // playerOne.display.textContent = 0;
    // playerTwo.display.textContent = 0;
    // playerOne.display.classList.remove('has-text-success', 'has-text-danger');
    // playerTwo.display.classList.remove('has-text-success', 'has-text-danger');
    // playerOne.button.disabled = false;
    // playerTwo.button.disabled = false;

    //Efficient Method
    for(let p of [playerOne, playerTwo]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value)
    resetGame();
})