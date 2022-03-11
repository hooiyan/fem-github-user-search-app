<script setup>
import ProfileDetailsTop from "./ProfileDetailsTop.vue";
import ProfileDetailsBottom from "./ProfileDetailsBottom.vue";
import ProfileStatistics from "./ProfileStatistics.vue";
</script>

<template>
  <main class="flex flex-col bg-lightModeWhitest p-[48px] rounded-[15px]">
    <ProfileDetailsTop />
    <ProfileStatistics />
    <ProfileDetailsBottom />
  </main>
</template>
