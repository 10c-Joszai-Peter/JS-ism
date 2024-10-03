let currentHours = 14;
let currentMinutes = 34;
let currentSeconds = 42;

let secondsPassed = (currentHours * 3600) + (currentMinutes * 60) + currentSeconds;

let totalSecondsInDay = 24 * 3600;

let remainingSeconds = totalSecondsInDay - secondsPassed;

document.getElementById('output').innerHTML = `
    <p>Remaining Seconds: ${remainingSeconds}</p>
`;
