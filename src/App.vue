<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />

    <RouteDisplay />
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import RouteDisplay from "./helpers/RouteDisplay.vue";

export default {
  components: {
    RouterLink,
    RouterView,
    RouteDisplay,
  },
};
</script>
