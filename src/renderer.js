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
ReactDom.render(<Timer />, document.getElementById('app'))