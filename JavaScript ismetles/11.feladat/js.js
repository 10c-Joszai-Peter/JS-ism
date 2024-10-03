function printLetters() {
    const inputString = document.getElementById('stringInput').value;
    let output = '';

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (!/[a-zA-Z]/.test(char)) {
            break;
        }
        output += char;
    }

    document.getElementById('output').innerText = output;
}
