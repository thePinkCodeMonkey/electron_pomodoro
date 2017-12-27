const { remote } = require('electron')

const versionElement = document.querySelector('#version')
versionElement.innerText = process.versions.electron

const currentWindow = remote.getCurrentWindow()

const DefaultPomodoroInSeconds = 5//25 * 60
let currentTimer = DefaultPomodoroInSeconds
let intervalId = null

const prettyPrint = (value) => {
    return value < 10 ? '0' + value.toString() : value
}

document.querySelector('#minutes').innerText = prettyPrint(Math.floor(currentTimer / 60))
document.querySelector('#seconds').innerText = prettyPrint(currentTimer % 60)

// TODO: stop timer after it hits zero
// TODO: stop play sound after timer hits zero
const startTimer = () => {
    intervalId = setInterval(() => {
       updateTimer() 
    }, 1000);
}
const updateTimer = () => {
    currentTimer -= 1;
    document.querySelector('#minutes').innerText = prettyPrint(Math.floor(currentTimer / 60))
    document.querySelector('#seconds').innerText = prettyPrint(currentTimer % 60)
    if (currentTimer == 0 ) {
        stopTimer()
    }
}

const stopTimer = () => {
    clearInterval(intervalId)
}

document.querySelector('#startTimer').addEventListener('click', startTimer)
document.querySelector('#stopTimer').addEventListener('click', stopTimer)
currentWindow.addEventListener('beforeunload', () => {
    stopTimer()
})
