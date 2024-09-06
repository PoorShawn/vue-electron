import { ipcMain } from "electron";
import { handleGetElectronStoreData } from "../../handlers/ipc/electronStore.js";

export default function () {
    ipcMain.handle('get-electron-store-data', handleGetElectronStoreData)
}
