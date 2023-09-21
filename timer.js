const initialTimeInSeconds = 4 * 60 * 60 + 51 * 60 + 16;
let timeLeftInSeconds = initialTimeInSeconds;

function updateTimer() {
    if (timeLeftInSeconds <= 0) {
        document.getElementById('timer-span').innerHTML = 'Time out';
        clearInterval(timerInterval);
    } else {
        const hours = Math.floor(timeLeftInSeconds / 3600);
        const minutes = Math.floor((timeLeftInSeconds % 3600) / 60);
        const seconds = timeLeftInSeconds % 60;

        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        document.getElementById('timer-span').innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        timeLeftInSeconds--;
    }
}

const timerInterval = setInterval(updateTimer, 1000);
