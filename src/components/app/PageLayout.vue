<script>
import {defineAsyncComponent} from "vue";

const RootPageLayout = defineAsyncComponent(
    () => import('./PageLayout/RootPageLayout.vue'))
const DefaultPageLayout = defineAsyncComponent(
    () => import('./PageLayout/DefaultPageLayout.vue'))
const AboutPageLayout = defineAsyncComponent(
    () => import('./PageLayout/AboutPageLayout.vue'))

export default {
  name: 'PageLayout',
  components: {
    RootPageLayout,
    DefaultPageLayout,
    AboutPageLayout
  },
  computed: {
    currentRouteName() {
      return this.$route.name
    },
    isRootPage() {
      return (this.currentRouteName === 'RootPage')
    },
    isAboutPage() {
      return (this.currentRouteName === 'AboutPage')
    }
  }
}
</script>

<template>
  <RootPageLayout
    v-if="isRootPage"/>

  <AboutPageLayout
    v-else-if="isAboutPage"/>

  <DefaultPageLayout
    v-else/>
</template>

<style>

</style>
