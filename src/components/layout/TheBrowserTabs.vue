<script>
import { ipcRenderer } from "electron";
import { mapState } from "pinia";

import layoutStore from "@/stores/layout.js";
import BaseMenuContainer from "@/components/container/BaseMenuContainer.vue";
import BrowserTab from "@/components/layout/BrowserTab.vue";
import BaseButton from "@/components/buttons/BaseButton.vue";

import { generateKey } from "@/helpers/utils.js";
import { home as formatHomeLink } from "@/helpers/formatters/links.js";
import { update as updateGlobalStore} from "@/helpers/actions/store/global.js";
import newTabMixin from "@/mixins/tab/newTabMixin.js";

export default {
  name: "TheBrowserTabs",
  components: {
    BaseMenuContainer,
    BaseButton,
    BrowserTab
  },
  mixins: [ newTabMixin ],
  data () {
    return {
      tabs: []
    }
  },
  computed: {
    ...mapState(layoutStore, ['activeTabId']),
    tabsCount () {
      return 1
    },
    defaultPath () {
      return formatHomeLink().path
    },
  },
  watch: {
    tabsCount: 'handleTabsCountChange'
  },
  async mounted () {
    this.setupHandlers();

    this.tabs = await this.getElectronStoreTabs();

    if (this.tabsCount) {
    // //  this.tabs.forEach(this.addTab);
    //
    //   if (this.activeTabId) {
    //     this.setActiveTab(this.activeTabId);
    //   }
    } else {
      this.createNewTab();
    }
  },
  unmounted() {
    this.clearTabs();
  },
  methods: {
    handleAddTab (_, value) {
      // 判断是否已经有想要的 tab
      function isMatchedTab (tabData) {
        return (tabData.uuid === value.uuid)
      }

      // const isTabPresent = this.tabs.find(isMatchedTab);
      const isTabPresent = false;

      // 如果没有，则正常执行 tab 的增加操作
      if(!isTabPresent) {
        const newTabs = [...this.tabs, value]

        this.tabs = newTabs;
        updateGlobalStore({'layout.tabs': newTabs})
      }
    },

    handleSetActiveTab (_, value) {
      updateGlobalStore({'layout.activeTabId': value})
    },

    handleUpdateTab (_, {tabId, data}) {
      function isMatchedTab (tabData) {
        return (tabData.uuid === tabId)
      }

      const tabs = [...this.tabs];
      const tab = tabs.find(isMatchedTab);

      if (tab && data) {
        Object.assign(tab, data);
        this.tabs = tabs;
        updateGlobalStore({'layout.tabs': tabs})
      }
    },

    handleDeleteTab (_, tabId) {
      function isMatchedTab (tabData) {
        return tabData.uuid !== tabId;
      }

      const tabs = [...this.tabs.filter(isMatchedTab)];
      this.tabs = tabs;
      updateGlobalStore({'layout.tabs': tabs});
    },

    setupHandlers () {
      ipcRenderer.on('add-tab', this.handleAddTab);
      ipcRenderer.on('set-active-tab', this.handleSetActiveTab);
      ipcRenderer.on('update-tab', this.handleUpdateTab);
      ipcRenderer.on('delete-tab', this.handleDeleteTab);
    },

    getElectronStoreTabs () {
      return ipcRenderer.invoke('get-electron-store-key', 'layout.tabs');
    },

    createNewTab () {
      const tabData = {
        uuid: generateKey(),
        path: this.defaultPath
      };

      this.addTab(tabData);
      this.setActiveTab(tabData.uuid);
    },

    handleTabsCountChange (value) {
      if (!value) {
        this.createNewTab();
      }
    },

    clearTabs () {
      ipcRenderer.send('clear-tabs');
    }

  }

}
</script>

<template>
  <h1>TheBrowserTabs</h1>
  <BaseMenuContainer
      class="top fixed base-menu-container"
  >
    <BrowserTab />

    <BaseButton
        @click="createNewTab"
    />
  </BaseMenuContainer>
</template>

<style lang="sass" scoped>
.base-menu-container
  height: 50px
  padding: 0 0.75rem
  display: flex
  align-items: center
  box-shadow: none
  overflow-y: auto
</style>
