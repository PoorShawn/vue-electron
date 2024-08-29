<script>
export default {
  computed: {
    route() {
      return this.$route;
    },
  },
};
</script>

<template>
  <div>
    <h3>Current Route Info:</h3>
    <p>Name: {{ route.name }}</p>
    <p>Path: {{ route.path }}</p>
    <p>Query: {{ route.query }}</p>
    <p>Params: {{ route.params }}</p>
  </div>
</template>

<style scoped>

</style>
