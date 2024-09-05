<script>
import FormSegment from "@/components/forms/profile/BaseProfileCreateForm/FormSegment.vue";
import LoginSegment from "@/components/forms/profile/BaseProfileCreateForm/LoginSegment.vue";

export default {
  name: "BaseProfileCreateForm",
  components: {
    FormSegment,
    LoginSegment
  },
  emits: [
      'loginLinkClick'
  ],
  methods: {
    handleLoginLinkClick () {
      this.$emit('loginLinkClick')
    }
  }
}
</script>

<template>
  <FormSegment />

  <LoginSegment
      @login-link-click="handleLoginLinkClick"
  />
</template>

<style scoped>

</style>
