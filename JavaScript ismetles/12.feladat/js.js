function printNumbers() {
    let output = '';
    let skipCount = 1;
    let skipIndex = 1;

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            if (skipIndex === skipCount) {
                skipCount++;
                skipIndex = 1;
                continue;
            }
            skipIndex++;
        }
        output += i + ', ';
    }

    document.getElementById('output').innerText = output.slice(0, -2);
}
