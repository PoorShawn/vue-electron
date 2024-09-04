import dayjs from "dayjs";

import { fileURLToPath } from 'node:url';
import { dirname, join as joinPath } from 'node:path';

export function currentTime (){
    return dayjs.utc().format();
}

export function fileRootPath (filePath){
    const directory = getDirectory();

    return joinPath(
        directory,
        '..',
        '..',
        filePath
    );
}

function getDirectory (){
    const fileURL = import.meta.url;

    if (fileURL){
        const filePath = fileURLToPath(fileURL);

        return dirname(filePath);
    } else{
        return __dirname;
    }
}
