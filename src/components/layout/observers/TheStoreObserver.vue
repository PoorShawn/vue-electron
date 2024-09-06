<script>
import { ipcRenderer } from "electron";
import { update as updateLocalState } from '@/helpers/actions/store/local.js';

export default {
  name: "TheStoreObserver",
  emits: ['init'],
  mounted() {
    ipcRenderer.on('update-store', this.handleUpdateStore);

    ipcRenderer.invoke('get-electron-store-data').then(this.handleGetData);
  },
  methods: {
    handleUpdateStore (_, data) {
      this.setStoreData(data);
    },
    handleGetData (data) {
      this.setStoreData(data);

      this.$emit('init');
    },
    setStoreData (value) {
      const storeKeysValues = Object.entries(value);

      storeKeysValues.forEach(this.setStoreKeyValue);
    },
    setStoreKeyValue ([key, value]) {
      updateLocalState(key, value);
    },
  }
}
</script>

<template>
  <div id="the-store-observer"/>
</template>

<style scoped>

</style>
