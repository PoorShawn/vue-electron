<script>
import BaseProfileEmailField from "../../../fields/profile/BaseProfileEmailField.vue";
import BaseProfilePasswordField from "../../../fields/profile/BaseProfilePasswordField.vue";
import BaseProfileRememberField from "../../../fields/profile/BaseProfileRememberField.vue";
import BaseSubmitButton from "../../../buttons/BaseSubmitButton.vue"

import BaseSegmentContainer from "@/components/container/segments/BaseSegmentContainer.vue";

export default {
  name: "FormSegment",
  components: {
    BaseProfileEmailField,
    BaseProfilePasswordField,
    BaseProfileRememberField,
    BaseSubmitButton,
    BaseSegmentContainer
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
  <BaseSegmentContainer>
    <BaseProfileEmailField ref="email" emailText="Email"/>

    <BaseProfilePasswordField passwordText="Password"/>

    <BaseProfileRememberField />

    <BaseSubmitButton actionKey="Login in"/>
  </BaseSegmentContainer>
</template>

<style scoped>

</style>
