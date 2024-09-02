<script>
export default {
  name: 'BaseProfilePasswordField',
  props: {
    passwordText: String,
  },
}
</script>

<template>
  <input
    ref="input"
    type="password"
    name="password"
    :placeholder="passwordText">
</template>

<style scoped>

</style>
