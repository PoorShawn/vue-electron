<script>
import { update as updateGlobalStore } from "@/helpers/actions/store/global.js";

export default {
  name: "AnonymousSegment",
  props: {
    anonymousText: {
      type: String,
      required: true
    },
  },
  methods: {
    handleLinkClick (){
      updateGlobalStore({
        'profile.isAnonymous': true
      });
    },
  },
}
</script>

<template>
  <span class="main-link" @click="handleLinkClick">
    <strong>Anonymous</strong>
  </span>
</template>

<style scoped>

</style>
