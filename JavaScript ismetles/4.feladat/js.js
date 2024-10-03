function calculateGrade() {
    const score = document.getElementById('score').value;
    let grade;

    if (score >= 85) {
        grade = 'A';
    } else if (score >= 70) {
        grade = 'B';
    } else if (score >= 50) {
        grade = 'C';
    } else if (score >= 30) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.getElementById('result').innerText = `Your grade is: ${grade}`;
}
