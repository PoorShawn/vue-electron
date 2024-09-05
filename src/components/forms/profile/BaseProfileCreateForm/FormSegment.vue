<script>
import MainSection from "@/components/forms/profile/BaseProfileCreateForm/FormSegment/MainSection.vue";
import BaseProfileRememberField from "@/components/fields/profile/BaseProfileRememberField.vue";
import BaseSubmitButton from "@/components/buttons/BaseSubmitButton.vue";

export default {
  name: "FormSegment",
  components: {
    MainSection,
    BaseProfileRememberField,
    BaseSubmitButton
  }
}
</script>

<template>
  <MainSection />

  <BaseProfileRememberField />

  <BaseSubmitButton
      ref="submit"
      action-key="signup"
  />
</template>

<style scoped>

</style>
