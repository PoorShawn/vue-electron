import { ipcMain } from "electron";
import {
    handleGetElectronStoreData,
    handleGetElectronStoreKey
} from "../../handlers/ipc/electronStore.js";

export default function () {
    ipcMain.handle('get-electron-store-data', handleGetElectronStoreData);

    ipcMain.handle('get-electron-store-key',handleGetElectronStoreKey);
}
