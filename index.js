var electron = require("electron");
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;

app.on('ready', function(){
  var appWindow;
  appWindow = new BrowserWindow({
    "webPreferences":{
      "webSecurity":false
  }
});

  appWindow.loadURL(`file://${__dirname}/app/index.html`);


})
