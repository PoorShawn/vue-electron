import { BrowserView } from "electron";
import getElectronStoreKey from '../electronStore/getKey.js';
import getActiveTabId from './getActiveId.js';
import setActiveTab from './setActive.js';
import setTabBounds from './setBounds.js';
import setViewScale from '../view/setScale.js';
import { handleNewWindow } from "../../handlers/app.js";
import changeViewBackgroundColor from '../view/changeBackgroundColor.js';

import { baseUrl } from "../../helpers/urls.js";
import { isDevelopment } from "../../helpers/utils.js";

export default function (data) {
    const { uuid, path } = data;
    const options = {
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        }
    };

    const tab = new BrowserView(options);

    tab.uuid = uuid;
    changeViewBackgroundColor(tab);
    mainWindow.addBrowserView(tab);
    setTabBounds(tab);

    const isSwitchToNewTab = getElectronStoreKey('layout.isSwitchToNewTab');
    if (!isSwitchToNewTab) {
        setActiveTab(getActiveTabId());
    }

    const url = `${baseUrl}#/${path}`;
    tab.webContents.loadURL(url);

    mainWindow.webContents.send('add-tab', data);

    tab.webContents.setWindowOpenHandler(handleDidStartNavigation);
    tab.webContents.on('did-start-navigation', handleDomReady);
    tab.webContents.on('dom-ready', addNewWindowHandler);

    function handleDidStartNavigation () {
        const data = {'layout.tabId': uuid};
        tab.webContents.send('update-store', data);
    }

    function handleDomReady () {
        setViewScale(tab);
    }

    function addNewWindowHandler (details) {
        return handleNewWindow({
            url: details.url,
            tabId: tab.uuid
        })
    }

}
