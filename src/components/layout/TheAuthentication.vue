<script>
import BaseProfileLoginForm from "../forms/profile/BaseProfileLoginForm.vue";
import BaseProfilePasswordResetForm from "../forms/profile/BaseProfilePasswordResetForm.vue";
import BaseProfileCreateForm from "../forms/profile/BaseProfileCreateForm.vue";

export default {
  name: "TheAuthentication",
  components: {
    BaseProfileLoginForm,
    BaseProfilePasswordResetForm,
    BaseProfileCreateForm
  },
  data() {
    return {
      activeForm: 'login'
    }
  },
  computed: {
    isLogin() {
      return (this.activeForm === 'login');
    },
    isPasswordReset() {
      return (this.activeForm === 'passwordReset');
    },
    isSignup() {
      return (this.activeForm === 'signup')
    }
  },
  methods: {
    handleSignupLinkClick() {
      this.activeForm = 'signup'
    },
    handlePasswordResetLinkClick() {
      this.activeForm = 'passwordReset'
    },
    handleLoginLinkClick() {
      this.activeForm = 'login'
    },
    handleBackLinkClick() {
      this.activeForm = 'login'
    }
  }
}
</script>

<template>
<!--  通过改变 activeForm 的值来改变组件的调用-->
  <div class="the-authentication middle-aligned-column">
    <div class="form-segment-container">
      <BaseProfileLoginForm
          v-if="isLogin"
          @password-reset-link-click="handlePasswordResetLinkClick"
          @password-signup-link-click="handleSignupLinkClick"
      />

      <BaseProfilePasswordResetForm
          v-else-if="isPasswordReset"
          @back-link-click="handleBackLinkClick"
      />

      <BaseProfileCreateForm
          v-else-if="isSignup"
          @login-link-click="handleLoginLinkClick"
      />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.the-authentication
  margin-top: 8vh

.form-segment-container
  max-width: 450px !important
  margin-top: 2.5rem
</style>
