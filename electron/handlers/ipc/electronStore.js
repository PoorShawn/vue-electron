import getElectronStoreData from '../../actions/electronStore/getData.js';
import getElectronStoreKey from '../../actions/electronStore/getKey.js';

export function handleGetElectronStoreData () {
    return getElectronStoreData();
}

export function handleGetElectronStoreKey (){
    return getElectronStoreKey();
}
