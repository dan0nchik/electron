// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
var nodeConsole = require('console');
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'renderer.js')
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();
console.log("hello");
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});
