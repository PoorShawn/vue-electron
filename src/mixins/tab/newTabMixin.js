import { ipcRenderer } from "electron";
import { mapState } from "pinia";

import layoutStore from "@/stores/layout.js";
import { generateKey } from "@/helpers/utils.js";

export default {
    computed: {
        ...mapState(
            layoutStore,
            ['isSwitchToNewTab']
        ),
    },
    methods: {
        openNewTab (path) {
            const tabData = {
                uuid: generateKey(),
                path
            };

            this.addTab(tabData);

            if (this.isSwitchToNewTab) {
                this.setActiveTab(tabData.uuid);
            }
        },

        addTab (value) {
            const tabDataFormatted = JSON.stringify(value);

            ipcRenderer.send('add-tab', tabDataFormatted);
        },
        setActiveTab (tabId) {
            ipcRenderer.send('set-active-tab', tabId)
        },
    }
}
