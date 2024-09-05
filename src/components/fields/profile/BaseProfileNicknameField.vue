<script>
export default {
  name: "BaseProfileNicknameField",
  props: {
    value: String
  }
}
</script>

<template>
  <input
      type="text"
      name="nickname"
      placeholder="Nickname"
      :value="value"
  >
</template>

<style scoped>

</style>
