const {app, BrowserWindow} = require('electron')
const path = require('path')
let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow()
    let appLocation = path.join('file://', __dirname, 'index.html')
    mainWindow.loadURL(appLocation)
})