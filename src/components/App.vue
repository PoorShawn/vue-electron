<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Root</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/default">Default</RouterLink>
    </nav>
    <RouteDisplay />

    <TheStoreObserver @init="handleStoreInit"/>

    <PageLayout v-if="isStoreSet"/>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import RouteDisplay from "../helpers/RouteDisplay.vue";

import TheStoreObserver from "@/components/layout/observers/TheStoreObserver.vue";
import PageLayout from "./app/PageLayout.vue";

export default {
  components: {
    RouterLink,
    RouterView,
    RouteDisplay,
    TheStoreObserver,
    PageLayout
  },
  data () {
    return {
      isStoreSet: false
    };
  },
  methods: {
    handleStoreInit () {
      this.isStoreSet = true;
    },
  }
};
</script>
