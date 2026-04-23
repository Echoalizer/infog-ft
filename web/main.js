const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1400,
        height: 780
    })

    win.setMinimumSize(1020, 460)

    win.setBackgroundColor("#d7d7d7")
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})

// save on close
// window.on('closed', () => {})
