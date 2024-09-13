import { app } from 'electron';

const systems = {
    windows:['win32'],
    macos: ['darwin'],
    linux: ['linux', 'freebsd', 'openbsd']
}

function isMatchedPlatform ([_, platforms]) {
    return platforms.includes(process.platform);
}

export const systemName = Object.entries(systems).find(isMatchedPlatform)[0];
export const isWindows = (systemName === 'windows');
export const isMacos = (systemName === 'macos');
export const isLinux = (systemName === 'linux');

export const isSingleInstance = app.requestSingleInstanceLock();

export const isDevelopment = !app.isPackaged;

export const colors = {
    white: '#ffffff',
    black: '#202122'
}
