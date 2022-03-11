<script setup>
import ProfileDetailsTop from "./ProfileDetailsTop.vue";
import ProfileDetailsBottom from "./ProfileDetailsBottom.vue";
import ProfileStatistics from "./ProfileStatistics.vue";
</script>

<template>
  <main
    class="flex flex-col bg-lightModeWhitest p-[48px] rounded-[15px] drop-shadow-[hsla(227, 46%, 51%, 0.2)]"
  >
    <ProfileDetailsTop />
    <ProfileStatistics />
    <ProfileDetailsBottom />
  </main>
</template>
