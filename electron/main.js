// electron/main.js
const { app, BrowserWindow } = require('electron')

function createWindow () {
  // 创建浏览器窗口
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // 允许 Node.js API 在渲染进程中使用
      contextIsolation: false, // 如果启用了 nodeIntegration，则需要禁用 contextIsolation
    //   preload: __dirname + '/preload.js' // 预加载脚本
    }
  })

  // 加载应用的 index.html
  win.loadURL(`http://localhost:5173/`)
}

app.whenReady().then(createWindow)

// 当所有窗口都被关闭时退出应用
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})