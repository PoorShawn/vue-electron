import { app } from 'electron';

export const isSingleInstance = app.requestSingleInstanceLock();

export const isDevelopment = !app.isPackaged;
