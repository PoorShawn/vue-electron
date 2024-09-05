<script>
export default {
  name: "LoginSegment",
  emits: [
    'loginLinkClick'
  ],
  data () {
    return {
      loginText: 'login'
    };
  },
  methods: {
    handleLoginLinkClick () {
      this.$emit('loginLinkClick')
    }
  }
}
</script>

<template>
  <span class="main-link" @click="handleLoginLinkClick">
    <strong v-text="loginText"></strong>
  </span>
</template>

<style scoped>
.main-link {
  cursor: pointer;
  display: block;
}
</style>
