function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
}

let startTime;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        document.getElementById("timer").innerHTML = formatTime(elapsedTime);
    }, 10);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function formatTime(time) {
    const date = new Date(time);
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const milliseconds = date.getMilliseconds().toString().padStart(3, "0");
    return `${minutes}:${seconds}.${milliseconds}`;
}

setInterval(updateClock, 1000);