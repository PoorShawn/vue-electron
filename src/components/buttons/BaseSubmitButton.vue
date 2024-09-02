<script>
export default {
  name: 'BaseSubmitButton',
  props: {
    actionKey: String,
    required: true,
  }
}
</script>

<template>
  <button ref="button" type="submit">
    <span v-text="actionKey"/>
  </button>
</template>

<style scoped>

</style>
