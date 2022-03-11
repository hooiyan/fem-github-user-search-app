<script setup>
import IconMoon from "../assets/IconMoon.vue";
</script>

<template>
  <header class="flex justify-between">
    <p class="font-bold text-[2.6rem]">devfinder</p>
    <aside class="flex items-center cursor-pointer group">
      <p
        class="uppercase font-bold text-[13px] tracking-[2.5px] leading-[19px] text-lightModeLightGray mr-[16px] group-hover:text-lightModeBlack"
      >
        Dark
      </p>
      <IconMoon />
    </aside>
  </header>
</template>
