import getelectronStoreKey from '../electronStore/getKey.js';

export default function () {
    return getelectronStoreKey('layout.activeTabId');
}
