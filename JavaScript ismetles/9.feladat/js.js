function calculateAverage() {
    const number = document.getElementById('numberInput').value;
    const digits = number.split('').map(Number);
    const sum = digits.reduce((acc, digit) => acc + digit, 0);
    const average = sum / digits.length;
    document.getElementById('result').innerText = `The average of digits is ${average}`;
}
