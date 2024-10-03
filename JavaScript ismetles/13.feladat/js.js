function findDivisors(num) {
    let divisors = [];
    let i = 1;
    while (i <= num) {
        if (num % i === 0) {
            divisors.push(i);
        }
        i++;
    }
    return divisors;
}

function printDivisors() {
    const outputDiv = document.getElementById('output');
    let num = 10;
    while (num <= 30) {
        const divisors = findDivisors(num);
        const div = document.createElement('div');
        div.className = 'number';
        div.textContent = `${num}: ${divisors.join(', ')}`;
        outputDiv.appendChild(div);
        num++;
    }
}

printDivisors();
