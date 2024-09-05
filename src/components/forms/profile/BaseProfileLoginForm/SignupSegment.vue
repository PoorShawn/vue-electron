<script>
export default {
  name: "SignupSegment",
  emits: [
      'signupLinkClick'
  ],
  props: {
    signupText :{
      type: String,
      required: true
    },
  },
  methods: {
    handleSignupLinkClick () {
      this.$emit('signupLinkClick')
    },
  },
}
</script>

<template>
  <span class="main-link" @click="handleSignupLinkClick">
    <strong v-text="signupText"></strong>
  </span>
</template>

<style scoped>
.main-link {
  cursor: pointer;
  display: block;
}
</style>
