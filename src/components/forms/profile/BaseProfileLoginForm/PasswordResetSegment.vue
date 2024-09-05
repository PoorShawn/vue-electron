<script>
export default {
  name: "PasswordResetSegment",
  emits: [
      'passwordResetLinkClick'
  ],
  props: {
    passwordResetText: {
      type: String,
      required: true
    },
  },
  methods: {
    handlePassWordResetLinkClick () {
      this.$emit('passwordResetLinkClick')
    },
  },
}
</script>

<template>
  <span class="main-link" @click="handlePassWordResetLinkClick">
    <strong v-text="passwordResetText"></strong>
  </span>
</template>

<style scoped>
.main-link {
  cursor: pointer;
  display: block;
}
</style>
