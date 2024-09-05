<script>
export default {
  name: "BackSegment",
  emits: [
    'backLinkClick'
  ],
  props: {
    backText: {
      type: String,
      required: true
    },
  },
  methods: {
    handleBackLinkClick () {
      this.$emit('backLinkClick')
    }
  }
}
</script>

<template>
  <span class="main-link" @click="handleBackLinkClick">
    <strong v-text="backText"></strong>
  </span>
</template>

<style scoped>
.main-link {
  cursor: pointer;
  display: block;
}
</style>
