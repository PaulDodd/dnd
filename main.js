require('babel-register-es6-react');
const electron = require('electron');
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.
const dialog = electron.dialog
const globalShortcut = electron.globalShortcut
const path = require('path')
const react = require('react')
const reactdom = require('react-dom')
// const React = react.React;
// const ReactDOM = reactdom.ReactDOM;
// import Game from 'react_tutorial'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;
var dropWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    app.quit(); // quit for now becuse it is easier
    // app.dock.hide();
    // if (process.platform != 'darwin') {
    //   app.quit();
    // }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
    globalShortcut.register('ctrl+shift+space', function () {
        console.log('ctrl+shift+space');
        if(dropWindow){
            if(dropWindow.isVisible()){
                dropWindow.hide();
            }
            else{
                dropWindow.show();
            }
        }
        else{
            dropWindow = new BrowserWindow({width: 800, height: 600});
            dropWindow.loadURL('file://' + __dirname + '/drop.html');
        }

    });
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 800, height: 600, frame: false});

    // and load the index.html of the app.
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // Open the DevTools.
    mainWindow.webContents.openDevTools();


    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});
