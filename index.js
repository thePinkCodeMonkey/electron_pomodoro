const {app, BrowserWindow} = require('electron')
const path = require('path')
let mainWindow
let appLocation = path.join('file://', __dirname, 'index.html')

const createMainWindow = function () {
    mainWindow = new BrowserWindow({
        show: false
    })
    mainWindow.loadURL(appLocation)
    mainWindow.on('closed', () => {
        mainWindow = null
    })
    mainWindow.on('ready-to-show', () => {
        mainWindow.show()
    })
}

app.on('ready', createMainWindow)
app.on('window-all-closed', () => {

})