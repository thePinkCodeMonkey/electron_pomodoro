import {app, BrowserWindow} from 'electron'
import path from 'path'

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
    //TODO was I suppose to do something here?
})