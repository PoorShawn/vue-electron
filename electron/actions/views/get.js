import getTabs from '../tabs/get.js';

export default function (){
    return [
        mainWindow,
        ...getTabs()
    ]
}
