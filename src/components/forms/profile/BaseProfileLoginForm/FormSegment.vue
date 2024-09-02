<script>
import BaseProfileEmailField from "../../../fields/profile/BaseProfileEmailField.vue";
import BaseProfilePasswordField from "../../../fields/profile/BaseProfilePasswordField.vue";
import BaseProfileRememberField from "../../../fields/profile/BaseProfileRememberField.vue";
import BaseSubmitButton from "../../../buttons/BaseSubmitButton.vue"

export default {
  name: "FormSegment",
  components: {
    BaseProfileEmailField,
    BaseProfilePasswordField,
    BaseProfileRememberField,
    BaseSubmitButton
  },
  mounted() {
    this.focusEmail();
  },
  methods: {
    focusEmail() {
      this.$refs.email.focus();
    }
  },
}
</script>

<template>
  <BaseProfileEmailField ref="email" emailText="Email"/>

  <BaseProfilePasswordField passwordText="Password"/>

  <BaseProfileRememberField />

  <BaseSubmitButton actionKey="Login in"/>
</template>

<style scoped>

</style>
