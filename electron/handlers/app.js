import findTab from '../actions/tab/find.js';

export function handleNewWindow ({url, tabId}) {
    const tab = findTab(tabId);
    const data ={url};

    tab.webContents.send('open-external-url', data);

    return {action: 'deny'};
}
