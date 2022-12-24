//create timer that starts at 30 minutes when clicking start button, stops when clicking stop button, and resets when clicking reset button

const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let time = 30 * 60;
let interval;

function startTimer() {
    interval = setInterval(() => {
        time--;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        timer.innerHTML = `${minutes}:${seconds}`;
    }, 1000);
    }

function stopTimer() {
    clearInterval(interval);
}


function resetTimer() {
    clearInterval(interval);
    timer.innerHTML = '30:00';
    time = 30 * 60;
}
start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);

//display h3 element when timer reaches 0 and dont display h3 element when timer is not 0
if (timer.innerHTML === '0') {
    document.getElementById('h3').style
        .display = 'block';
}
else {
    document.getElementById('h3').style
        .display = 'none';
}







