<script setup>
import ProfileDetailsTop from "./ProfileDetailsTop.vue";
import ProfileDetailsBottom from "./ProfileDetailsBottom.vue";
import ProfileStatistics from "./ProfileStatistics.vue";
</script>

<template>
  <main
    class="flex flex-col bg-lightModeWhitest pt-[44px] xs:pt-[32px] px-[48px] xs:px-[24px] pb-[48px] md:p-[40px] rounded-[15px] shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.198567)]"
  >
    <ProfileDetailsTop />
    <ProfileStatistics />
    <ProfileDetailsBottom />
  </main>
</template>
