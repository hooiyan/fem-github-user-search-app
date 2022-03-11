<script setup>
import IconLocation from "../assets/IconLocation.vue";
import IconWebsite from "../assets/IconWebsite.vue";
import IconTwitter from "../assets/IconTwitter.vue";
import IconCompany from "../assets/IconCompany.vue";
</script>

<template>
  <section
    class="grid grid-cols-2 grid-rows-2 gap-y-[15px] gap-x-[50px] ml-[154px]"
  >
    <div class="flex items-center">
      <IconLocation />
      <p class="text-lightModeSecondaryBlue text-[1.5rem] pl-[16px]">
        San Francisco
      </p>
    </div>

    <div class="flex items-center">
      <IconTwitter />
      <a class="text-lightModeSecondaryBlue text-[1.5rem] pl-[16px]" href="#"
        >Not Available</a
      >
    </div>

    <div class="flex items-center">
      <IconWebsite />
      <a class="text-lightModeSecondaryBlue text-[1.5rem] pl-[16px]" href="#"
        >https://github.blog</a
      >
    </div>

    <div class="flex items-center">
      <IconCompany />
      <p class="text-lightModeSecondaryBlue text-[1.5rem] pl-[16px]">@github</p>
    </div>
  </section>
</template>
