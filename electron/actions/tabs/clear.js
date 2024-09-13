import getTabs from './get.js';
import clearTab from '../tab/clear.js';

export default function () {
    function getTabId (tabData) {
        return tabData.uuid;
    }

    const tabIds = getTabs().map(getTabId);

    tabIds.forEach(clearTab);
}
