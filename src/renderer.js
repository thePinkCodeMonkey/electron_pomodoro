//Module Imports
import { remote } from 'electron'
import React from 'react'
import ReactDom from 'react-dom'

import Timer from './src/components/timer'
const versionElement = document.querySelector('#version')
const currentWindow = remote.getCurrentWindow()
const DefaultPomodoroInSeconds = 25 * 60


// TODO: `stop` play sound after timer hits zero
// TODO: move default settings to a json file somewhere
let currentTimer = DefaultPomodoroInSeconds
let intervalId = null

const prettyPrint = (value) => {
    return value < 10 ? '0' + value.toString() : value
}

const setTimerText = timerInSeconds => {
    document.querySelector('#minutes').innerText = prettyPrint(Math.floor(timerInSeconds / 60))
    document.querySelector('#seconds').innerText = prettyPrint(timerInSeconds % 60)
}

setTimerText(currentTimer)

const startTimer = () => {
    intervalId = setInterval(() => {
       updateTimer() 
    }, 1000)
}

const stopTimer = () => {
    clearInterval(intervalId)
}

const updateTimer = () => {
    currentTimer -= 1;
    setTimerText(currentTimer)
    if (currentTimer <= 0 ) {
        stopTimer()
    }
}

//Event Listener
document.querySelector('#startTimer').addEventListener('click', startTimer)
document.querySelector('#stopTimer').addEventListener('click', stopTimer)
currentWindow.addListener('beforeunload', () => {
    stopTimer()
})

ReactDom.render(<Timer />, document.getElementById('app'))