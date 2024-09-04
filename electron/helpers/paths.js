import { app } from 'electron';
import { join } from 'node:path';

import { isDevelopment } from "./utils.js";
import { fileRootPath as formatFileRootPath} from "./formatters.js";

const developmentUserDataPath = formatFileRootPath('electron_data');

if (isDevelopment){
    app.setPath('userData', developmentUserDataPath);
}

export const productionPath = formatFileRootPath('index.html');

const publicPath = (isDevelopment ? 'public' : '');
const iconPublicPath = join(publicPath, 'logo.png');
export const iconPath = formatFileRootPath(iconPublicPath);

export const userDataPath = app.getPath('userData');

export const audioFolderPath = join(userDataPath, 'audio');

export const backgroundImagesFoldersPath = join(userDataPath, 'background_images');

export const envFilePath = formatFileRootPath('.env');

