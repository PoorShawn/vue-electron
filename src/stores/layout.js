import { defineStore } from "pinia";

const data = {
    state () {
        return {
            activeTabId: null,
            isSwitchToNewTab: null,
        };
    },
    actions: {
        setActiveTabId (value) {
            this.activeTabId = value;
        },
        setIsSwitchToNewTab (value) {
            this.isSwitchToNewTab = value
        }
    },
}

export default defineStore(
    'layout',
    data
)
