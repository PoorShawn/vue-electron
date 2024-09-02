<script>
export default {
  name: 'BaseProfileEmailField',
  props: {
    emailText: String
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
  },
}
</script>

<template>
  <input
    ref="input"
    type="text"
    name="email"
    :placeholder="emailText">
</template>

<style scoped>

</style>
