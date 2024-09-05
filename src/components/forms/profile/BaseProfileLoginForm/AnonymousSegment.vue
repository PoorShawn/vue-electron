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
    <strong v-text="anonymousText"></strong>
  </span>
</template>

<style scoped>
.main-link {
  cursor: pointer;
  display: block;
}
</style>
