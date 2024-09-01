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
}
</script>

<template>
  <FormSegment />

  <AnonymousSegment />

  <PasswordResetSegment />

  <SignupSegment />

  <SettingSegment />
</template>

<style scoped>

</style>
