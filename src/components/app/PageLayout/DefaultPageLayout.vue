<script>
import TheExternalUrlsObserver from "@/components/layout/observers/TheExternalUrlsObserver.vue";

export default {
  components: {
    TheExternalUrlsObserver,
  }
}
</script>

<template>
  <TheExternalUrlsObserver />

  <h3>DefaultPage</h3>
  <RouterView/>
</template>

<style scoped>

</style>
