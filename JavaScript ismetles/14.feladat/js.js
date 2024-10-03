function fizzBuzz() {
    const outputDiv = document.getElementById('output');
    let num = 1;
    while (num <= 100) {
        let output = '';
        if (num % 3 === 0) output += 'fizz';
        if (num % 5 === 0) output += 'buzz';
        if (output === '') output = num;
        const div = document.createElement('div');
        div.className = 'number';
        div.textContent = output;
        outputDiv.appendChild(div);
        num++;
    }
}

fizzBuzz();
