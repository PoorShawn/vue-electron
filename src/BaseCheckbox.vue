<script>
export default {
  name: 'BaseCheckbox',
  props: {
    name: String,
    checkBoxText: String
  },
}
</script>

<template>
  <input type="checkbox" :name="name">

  <label>
    {{ checkBoxText }}
  </label>
</template>

<style scoped>

</style>
