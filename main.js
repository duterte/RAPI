const path = require('path');
const { app, BrowserWindow, Menu } = require('electron');

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.resolve('preload.js')
    },
    center:true,
  })

  window.webContents.loadURL('http://localhost:4200/');
}

Menu.setApplicationMenu(null);

app.whenReady().then(() => {

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

});

app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') app.quit();

});