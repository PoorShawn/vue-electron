<script>
import { mapState } from "pinia";
import { ipcRenderer, shell } from "electron";
import videoStore from '@/stores/video.js';
import newTabMixin from '@/mixins/tab/newTabMixin.js';
import formatPathFormExternalLink from '@/helpers/formatters/pathFromExternalLink.js';

export default {
  name: "TheExternalUrlsObserver",
  mixins: newTabMixin,
  computed: {
    ...mapState(
        videoStore,
        {
          isOpenVideoLinksInNewTab:
          'isOpenLinksInNewTab'
        },
    ),
  },
  mounted() {
    ipcRenderer.on(
        'open-external-url',
        this.handleOpenExternalUrl
    );
  },
  methods: {
    handleOpenExternalUrl (_, url) {
      const path = formatPathFormExternalLink({url});
      if (path) {
        this.openInternalPage({path})
      } else {
        shell.openExternal(url);
      }
    },
    openInternalPage ({path}) {
      if (this.isOpenVideoLinksInNewTab) {
        this.openNewTab({path})
      } else {
        this.$router.push(`/${path}`);
      }
    },
  }

}
</script>

<template>
  <div id="the-external-links-observer"/>
</template>

<style scoped>

</style>
