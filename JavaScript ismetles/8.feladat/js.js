function iterateString() {
    const inputString = document.getElementById('inputString').value;
    let result = '';

    for (let i = 0; i < inputString.length; i++) {
        result += inputString[i] + '\n';
    }

    document.getElementById('result').innerText = result;
}
