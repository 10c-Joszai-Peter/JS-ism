function determineWinner() {
    const player1 = parseInt(document.getElementById('player1').value);
    const player2 = parseInt(document.getElementById('player2').value);
    let result;

    if (player1 === player2) {
        result = "The game is a tie.";
    } else if ((player1 === 0 && player2 === 2) || (player1 === 1 && player2 === 0) || (player1 === 2 && player2 === 1)) {
        result = "The first player wins.";
    } else {
        result = "The second player wins.";
    }

    document.getElementById('result').innerText = result;
}
