<script>
import BackSegment from "@/components/forms/profile/BaseProfiePasswordResetForm/BackSegment.vue";
import SuccessSegment from "@/components/forms/profile/BaseProfiePasswordResetForm/SuccessSegment.vue";
import ResetFormSegment from "@/components/forms/profile/BaseProfiePasswordResetForm/ResetFormSegment.vue";
import UpdateFormSegment from "@/components/forms/profile/BaseProfiePasswordResetForm/UpdateFormSegment.vue";

export default {
  name: "BaseProfilePasswordResetForm",
  emits:  [
      'backLinkClick'
  ],
  components: {
    BackSegment,
    SuccessSegment,
    ResetFormSegment,
    UpdateFormSegment
  },
  data () {
    return {
      email: null,
      isSuccess: false,
      activeForm: 'reset'
    };
  },
  watch: {
    email: 'handleEmailChange'
  },
  computed: {
    isReset () {
      return (this.activeForm === 'reset');
    },
    isUpdate () {
        return (this.activeForm === 'update');
    },
  },
  methods: {
    handleBackLinkClick () {
      this.$emit('backLinkClick')
    },
    handleEmailChange (value) {
      if (value) {
        this.activeForm = 'update';
      }
    },
    setEmail (value) {
      this.email = value;
    },
    setIsSuccess (value) {
      this.isSuccess = value;
    },
  },
}
</script>

<template>
  <BackSegment
      backText="Go Back to Login"
      @back-link-click="handleBackLinkClick"
  />

  <SuccessSegment v-if="isSuccess"/>

  <ResetFormSegment v-else-if="isReset"/>

  <UpdateFormSegment v-else-if="isUpdate" :email="email"/>
</template>

<style scoped>

</style>
