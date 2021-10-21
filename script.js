const tic = document.querySelector('.container');
const player1value = document.querySelector('.player11')
const player2value = document.querySelector('.player22')
console.log(player1value)


for(let i=0; i<3; i++) {
    const row = document.createElement('div');
    row.classList.add('row')
    tic.appendChild(row);
    for(let l=0; l<3; l++) {
        const column = document.createElement('div');
        column.classList.add('column')
        row.appendChild(column);

    }
}


const games = document.querySelectorAll('.column');
for(let m=0; m<games.length; m++) {
    games[m].addEventListener('click', () =>
        {
            if(gameBoard.round == 0) {
             player1 = player(player1value.value, 'x');
             player2 = player(player2value.value, 'o');
            }
            
            if((gameBoard.round % 2 == 0) && games[m].textContent == '') {
                gameBoard.choice(player1.playersimbolo,m);
                gameBoard.round += 1;
                games[m].textContent = player1.playersimbolo;
            }
            else if((gameBoard.round % 2 != 0) && games[m].textContent == ''){
                gameBoard.choice(player2.playersimbolo,m);
                gameBoard.round += 1;
                games[m].textContent = player2.playersimbolo;
            }

            if(checkWin(gameBoard.games)) {
                for(let m=0; m<games.length; m++) {
                    games[m].textContent = '';
                    gameBoard.round = 0;
                }

                gameBoard.games.splice(0,9);
            }

            console.log(gameBoard.round,player1,player2,gameBoard.games,player1.playersimbolo,m)
            
        })
}




































const gameBoard = (function() {
    let games = [];
    let round = 0;
    let choice = function(simbolo,n) {
        games[n] = simbolo; 
    }
    return {games,choice,round};
})();


function player(name,simbolo) {
    playername = name;
    playersimbolo = simbolo;
    return{playername,playersimbolo}
}

function display(array) {
    const square = document.querySelectorAll('.column');
    for(let i=0; i<array.length; i++) {
        square[i].textContent = array[i];
    }

}
























function checkWin(arrayprova) {
    if((arrayprova[0] == arrayprova[1] && arrayprova[1] == arrayprova[2] && arrayprova[1] == player1.playersimbolo)) {
        alert(`${player1.playername} has won!`,);
        return true;
    }
    else if((arrayprova[0] == arrayprova[1] && arrayprova[1] == arrayprova[2] && arrayprova[1] == player2.playersimbolo)) {
        alert(`${player2.playername} has won!`)
        return true;
    }
    else if((arrayprova[3] == arrayprova[4] && arrayprova[4] == arrayprova[5] && arrayprova[3] == player1.playersimbolo)) {
        alert(`${player1.playername} has won!`)
        return true;
    }
    else if((arrayprova[3] == arrayprova[4] && arrayprova[4] == arrayprova[5] && arrayprova[3] == player2.playersimbolo)) {
        alert(`${player2.playername} has won!`)
        return true;
    }
    else if((arrayprova[6] == arrayprova[7] && arrayprova[7] == arrayprova[8] && arrayprova[6] == player1.playersimbolo)) {
        alert(`${player1.playername} has won!`)
        return true;
    }
    else if((arrayprova[6] == arrayprova[7] && arrayprova[7] == arrayprova[8] && arrayprova[6] == player2.playersimbolo)) {
        alert(`${player2.playername} has won!`)
        return true;
    }
    else if((arrayprova[0] == arrayprova[3] && arrayprova[3] == arrayprova[6] && arrayprova[6] == player1.playersimbolo)) {
        alert(`${player1.playername} has won!`)
        return true;
    }
    else if((arrayprova[0] == arrayprova[3] && arrayprova[3] == arrayprova[6] && arrayprova[6] == player2.playersimbolo)) {
        alert(`${player2.playername} has won!`)
        return true;
    }
    else if((arrayprova[1] == arrayprova[4] && arrayprova[4] == arrayprova[7] && arrayprova[1] == player1.playersimbolo)) {
        alert(`${player1.playername} has won!`)
        return true;
    }
    else if((arrayprova[1] == arrayprova[4] && arrayprova[4] == arrayprova[7] && arrayprova[1] == player2.playersimbolo)) {
        alert(`${player2.playername} has won!`)
        return true;
    }
    else if((arrayprova[2] == arrayprova[5] && arrayprova[5] == arrayprova[8] && arrayprova[2] == player1.playersimbolo)) {
        alert(`${player1.playername} has won!`)
        return true;
    }
    else if((arrayprova[2] == arrayprova[5] && arrayprova[5] == arrayprova[8] && arrayprova[2] == player2.playersimbolo)) {
        alert(`${player2.playername} has won!`)
        return true;
    }
    else if((arrayprova[0] == arrayprova[4] && arrayprova[4] == arrayprova[8] && arrayprova[0] == player1.playersimbolo)) {
        alert(`${player1.playername} has won!`)
        return true;
    }
    else if((arrayprova[0] == arrayprova[4] && arrayprova[4] == arrayprova[8] && arrayprova[0] == player2.playersimbolo)) {
        alert(`${player2.playername} has won!`)
        return true;
    }
    else if((arrayprova[2] == arrayprova[4] && arrayprova[4] == arrayprova[6] && arrayprova[2] == player1.playersimbolo)) {
        alert(`${player1.playername} has won!`)
        return true;
    }
    else if((arrayprova[2] == arrayprova[4] && arrayprova[4] == arrayprova[6] && arrayprova[2] == player2.playersimbolo)) {
        alert(`${player2.playername} has won!`)
        return true;
    }
    
    let valueprova = 0;

    for(let i=0; i< arrayprova.length; i++) {
        if(arrayprova[i] != undefined ) {
            valueprova += 1;
        }
    }

    if(valueprova == 9) {
        console.log(valueprova)
        alert('Its a tie')
        return true;
    }

}