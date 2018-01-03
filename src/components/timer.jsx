'use strict'

import React from 'react'

const DefaultPomodoroInSeconds = 25 * 60
class Timer extends React.Component {
    constructor () {
        super()
        this.state = {
           currentTimer: DefaultPomodoroInSeconds,
        }
        this.intervalId = null
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
    }
    render() {
        return (
            <div className='Timer'>
                {this.prettyPrint(Math.floor(this.state.currentTimer / 60))}:{this.prettyPrint(this.state.currentTimer % 60)}
                <button onClick={this.startTimer}>Start Timer</button>
                <button onClick={this.stopTimer}>Stop Timer</button>
            </div>
        )
    }

    prettyPrint(value) {
        return value < 10 ? '0' + value.toString() : value
    }

    stopTimer() {
        console.log("Stopping timer")
        clearInterval(this.intervalId)
        this.intervalId = null
    }

    startTimer() {
        this.intervalId = setInterval(()=> {
            this.updateTimer()
        }, 1000)
    }

    updateTimer() {
        this.setState( (prevState, props)=>({
            currentTimer: prevState.currentTimer - 1
        }))
    }

    componentDidUpdate() {
        if (this.state.currentTimer == 0)
            this.stopTimer()
    }

    shouldComponentUpdate(nextProp, nextState) {
        return nextState.currentTimer >=0
    }
}

export default Timer