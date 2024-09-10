import { ipcRenderer } from 'electron'

export function update(
    data,
    { isSave = true } = {}
) {
    const dataFormatted = JSON.stringify(data);
    // console.log('global.js:'+data["profile.isAnonymous"])
    return ipcRenderer.invoke('update-store', dataFormatted, { isSave });
}
