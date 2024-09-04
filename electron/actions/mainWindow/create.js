import { BrowserWindow } from "electron";

import { isDevelopment } from "../../helpers/utils.js";
import { baseUrl } from "../../helpers/urls.js";
import getElectronStoreKey from '../electronStore/getKey.js';
import showMainWindow from './show.js';
import hideMainWindow from './hide.js';
import callQuit from '../app/callQuit.js'

function handleReadyToShow (){
    showMainWindow();
}

function handleClose (
    event
) {
    event.preventDefault()

    const isQuitOnClose =
        getElectronStoreKey(
            'window.isQuitOnClose'
        )

    if (isQuitOnClose) {
        callQuit()
    } else {
        hideMainWindow()
    }
}

export default function () {
    const mainWindowWidth = 900
    const mainWindowHeight = 600

    const options = {
        width: mainWindowWidth,
        height: mainWindowHeight,
        show: false,
        webPreferences: {
            contextIsolation: false,
            devTools: isDevelopment,
            nodeIntegration: true
        }
    }

    mainWindow = new BrowserWindow(options)

    mainWindow.loadURL(baseUrl)

    mainWindow.setMinimumSize(
        mainWindowWidth,
        mainWindowHeight
    )

    mainWindow.once(
        'ready-to-show',
        handleReadyToShow
    )

    mainWindow.on(
        'close',
        handleClose
    )
}
