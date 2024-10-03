function drawSquare() {
    const size = parseInt(document.getElementById('sizeInput').value);
    let square = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i === j || i + j === size - 1) {
                square += '%';
            } else {
                square += ' ';
            }
        }
        square += '\n';
    }

    document.getElementById('squareOutput').innerText = square;
}
