// electron/main.js
const { app, BrowserWindow } = require('electron');

async function createWindow () {
  try {
    // 动态导入 electron-store
    const { default: Store } = await import('electron-store');

    // 初始化 store 实例
    const store = new Store();

    // 创建浏览器窗口
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true, // 允许 Node.js API 在渲染进程中使用
        contextIsolation: false, // 如果启用了 nodeIntegration，则需要禁用 contextIsolation
        // preload: __dirname + '/preload.js' // 预加载脚本
      }
    });

    // 加载应用的 index.html
    win.loadURL(`http://localhost:5173/`);

    // 示例：从 store 中获取一些数据并在控制台打印出来
    console.log(store.get('exampleKey', 'defaultValue'));

    // 示例：向 store 中写入一些数据
    store.set('exampleKey', 'someValue');

    console.log(store.get('exampleKey'));
  } catch (error) {
    console.error('Failed to load electron-store:', error);
  }
}

app.whenReady().then(createWindow);

// 当所有窗口都被关闭时退出应用
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
