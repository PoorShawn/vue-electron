<script>
import BaseProfileEmailField from "@/components/fields/profile/BaseProfileEmailField.vue";
import BaseSubmitButton from "@/components/buttons/BaseSubmitButton.vue";

export default {
  name: "ResetFormSegment",
  components : {
    BaseProfileEmailField,
    BaseSubmitButton
  },
  mounted() {
    this.focusEmail()
  },
  methods: {
    focusEmail () {
      this.$refs.email.focus();
    },
  }
}
</script>

<template>
  <BaseProfileEmailField ref="email"/>

  <BaseSubmitButton action-key="sendCode"/>
</template>

<style scoped>

</style>
