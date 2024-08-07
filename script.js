let tickCount = 0;
let countdownInterval;
let tickTimeout;
let continuousMode = false;
let donoCondition = false;
let flameCondition = false;

document.getElementById('startStopButton').addEventListener('click', () => {
    const startStopButton = document.getElementById('startStopButton');
    if (startStopButton.innerText === 'Start') {
        tickCount = 0;
        document.getElementById('status').innerText = "Started...";
        document.getElementById('ticksPassed').innerText = "Ticks passed: 0";
        continuousMode = document.getElementById('continuousMode').checked; // Get continuous mode state
        donoCondition = document.getElementById('donoCondition').checked; // Get donator status condition state
        flameCondition = document.getElementById('flameCondition').checked; // Get flame body condition state
        startStopButton.innerText = 'Stop';
        if (countdownInterval) clearInterval(countdownInterval);
        if (tickTimeout) clearTimeout(tickTimeout);
        waitForSixthSecond();
    } else {
        startStopButton.innerText = 'Start';
        document.getElementById('status').innerText = "Stopped.";
        if (countdownInterval) clearInterval(countdownInterval);
        if (tickTimeout) clearTimeout(tickTimeout);
    }
});

document.getElementById('settingsButton').addEventListener('click', () => {
    document.getElementById('settingsPage').style.display = 'block';
});

document.getElementById('closeSettingsButton').addEventListener('click', () => {
    document.getElementById('settingsPage').style.display = 'none';
});

function waitForSixthSecond() {
    const now = new Date();
    const currentSeconds = now.getSeconds();
    const currentMilliseconds = now.getMilliseconds();

    let delayMilliseconds;

    if (currentSeconds < 6) {
        delayMilliseconds = (6 - currentSeconds) * 1000 - currentMilliseconds;
    } else {
        delayMilliseconds = (60 - currentSeconds + 6) * 1000 - currentMilliseconds;
    }

    startCountdown(delayMilliseconds);
    tickTimeout = setTimeout(startTicking, delayMilliseconds);
}

function startCountdown(delayMilliseconds) {
    let remainingTime = Math.floor(delayMilliseconds / 1000);

    countdownInterval = setInterval(() => {
        remainingTime--;
        document.getElementById('countdown').innerText = `Next tick in: ${remainingTime}s`;

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerText = `Next tick in: 0s`;
        }

    }, 1000);
}

function startTicking() {
    tickCount++;
    beep();
    document.getElementById('ticksPassed').innerText = `Ticks passed: ${tickCount}`;
    if ((donoCondition && flameCondition && tickCount >= 4) || (donoCondition && !flameCondition && tickCount >= 5) || (flameCondition && !donoCondition && tickCount >= 5) || (!flameCondition && !donoCondition && tickCount >= 6)) {
        beep2();
        setTimeout(beep2, 300);
        document.getElementById('status').innerText = "Eggs hatched!\nSwitch the next set in before the next tick.";
        tickCount = 0;

        if (continuousMode) {
            // Automatically restart the cycle if continuous mode is active
            waitForSixthSecond();
        } else {
            document.getElementById('startStopButton').innerText = 'Start';
        }
    } else {
        document.getElementById('status').innerText = `Tick ${tickCount}`;
        waitForSixthSecond();
    }
}

function beep() { //small beep
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // frequency in Hz (A4 note)
    oscillator.start();

    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 0.2); // Beep duration and volumw
    oscillator.stop(audioContext.currentTime + 0.2);
}

function beep2() { //loud beep
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(1046, audioContext.currentTime); // frequency in Hz 
    gainNode.gain.setValueAtTime(1, audioContext.currentTime); // Set initial gain (volume)

    oscillator.start();

    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 1); // Beep duration
    oscillator.stop(audioContext.currentTime + 1);
}
