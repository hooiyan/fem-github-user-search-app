<script setup>
import IconLocation from "../assets/IconLocation.vue";
import IconWebsite from "../assets/IconWebsite.vue";
import IconTwitter from "../assets/IconTwitter.vue";
import IconCompany from "../assets/IconCompany.vue";
</script>

<template>
  <section
    class="grid grid-cols-2 grid-rows-2 gap-y-[15px] gap-x-[40px] ml-[154px]"
  >
    <div class="flex items-center">
      <IconLocation />
      <p class="text-lightModeSecondaryBlue text-[1.5rem] ml-[16px]">
        San Francisco
      </p>
    </div>

    <div class="flex items-center">
      <IconTwitter />
      <a class="text-lightModeSecondaryBlue text-[1.5rem] ml-[16px]" href="#"
        >Not Available</a
      >
    </div>

    <div class="flex items-center">
      <IconWebsite />
      <a
        class="text-lightModeSecondaryBlue text-[1.5rem] ml-[16px] text-ellipsis overflow-hidden"
        href="#"
        >https://github.blogffffffffffffffff</a
      >
    </div>

    <div class="flex items-center">
      <IconCompany />
      <p class="text-lightModeSecondaryBlue text-[1.5rem] ml-[16px]">@github</p>
    </div>
  </section>
</template>
