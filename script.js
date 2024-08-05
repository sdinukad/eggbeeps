let tickCount = 0;
let countdownInterval;
let tickTimeout;

document.getElementById('startButton').addEventListener('click', () => {
    tickCount = 0;
    document.getElementById('status').innerText = "Started...";
    document.getElementById('ticksPassed').innerText = "Ticks passed: 0";
    if (countdownInterval) clearInterval(countdownInterval);
    if (tickTimeout) clearTimeout(tickTimeout);
    waitForSixthSecond();
});

function waitForSixthSecond() {
    const now = new Date();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();
    let delay;

    if (seconds < 6) {
        delay = (6 - seconds) * 1000 - milliseconds;
    } else {
        delay = (60 - seconds + 6) * 1000 - milliseconds;
    }

    startCountdown(delay);
    tickTimeout = setTimeout(startTicking, delay);
}

function startCountdown(delay) {
    let remainingTime = Math.floor(delay / 1000);
    document.getElementById('countdown').innerText = `Next tick in: ${remainingTime}s`;

    countdownInterval = setInterval(() => {
        remainingTime--;
        document.getElementById('countdown').innerText = `Next tick in: ${remainingTime}s`;

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

function startTicking() {
    tickCount++;
    beep();

    document.getElementById('ticksPassed').innerText = `Ticks passed: ${tickCount}`;

    if (tickCount >= 4) {
        beep();
        beep();
        document.getElementById('status').innerText = "Egg hatched!";
        tickCount = 0;
    } else {
        document.getElementById('status').innerText = `Tick ${tickCount}`;
        waitForSixthSecond();
    }
}

function beep() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // frequency in Hz (A4 note)
    oscillator.start();

    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 0.1); // Beep duration
    oscillator.stop(audioContext.currentTime + 0.1);
}
