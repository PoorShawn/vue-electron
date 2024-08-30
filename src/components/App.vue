<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Root</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/default">Default</RouterLink>
    </nav>
    <RouteDisplay />

    <PageLayout />
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import RouteDisplay from "../helpers/RouteDisplay.vue";
import PageLayout from "./app/PageLayout.vue";

export default {
  components: {
    RouterLink,
    RouterView,
    RouteDisplay,
    PageLayout
  },
};
</script>
