import createTab from '../../actions/tab/create.js';
import setActiveTab from '../../actions/tab/setActive.js';
import updateTab from '../../actions/tab/update.js';
import deleteTab from '../../actions/tab/delete.js';
import isReplaceActive from "../../actions/tab/isReplaceActive.js";
import replaceActiveTab from '../../actions/tab/replaceActive.js';

export  function handleAddTab (_, data) {
    const dataFormatted = JSON.parse(data);

    createTab(dataFormatted);
}

export function handleSetActiveTab (_, tabId) {
    setActiveTab(tabId);
}

export function handleUpdateTab (_, data) {
    updateTab(data);
}

export function handleDeleteTab (_, tabId) {
    const isReplace = isReplaceActive(tabId);

    if (isReplace) {
        replaceActiveTab(tabId);
    }

    deleteTab(tabId);
}

