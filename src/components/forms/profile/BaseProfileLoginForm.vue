<script>
import FormSegment from "./BaseProfileLoginForm/FormSegment.vue";
import AnonymousSegment from "./BaseProfileLoginForm/AnonymousSegment.vue";
import PasswordResetSegment from "./BaseProfileLoginForm/PasswordResetSegment.vue";
import SignupSegment from "./BaseProfileLoginForm/SignupSegment.vue";
import SettingSegment from "./BaseProfileLoginForm/SettingSegment.vue";

export default {
  name: "BaseProfileLoginForm",
  components: {
    FormSegment,
    AnonymousSegment,
    PasswordResetSegment,
    SignupSegment,
    SettingSegment
  },
  emits: [
    'passwordResetLinkClick',
    'passwordSignupLinkClick'
  ],
  methods: {
    handlePasswordResetLinkClick () {
      this.$emit('passwordResetLinkClick')
    },
    handleSignupLinkLinkClick () {
      this.$emit('passwordSignupLinkClick')
    }
  },
}
</script>

<template>
  <FormSegment />

  <AnonymousSegment anonymousText="Continue anonymously"/>

  <PasswordResetSegment
      passwordResetText="Reset password"
      @password-reset-link-click="handlePasswordResetLinkClick"
  />

  <SignupSegment
      signupText="Sign up"
      @signup-link-click="handleSignupLinkLinkClick"
  />

  <SettingSegment />
</template>

<style scoped>

</style>
