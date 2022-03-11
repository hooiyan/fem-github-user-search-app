<script setup>
import IconLocation from "../assets/IconLocation.vue";
import IconWebsite from "../assets/IconWebsite.vue";
import IconTwitter from "../assets/IconTwitter.vue";
import IconCompany from "../assets/IconCompany.vue";
</script>

<template>
  <section
    class="grid grid-cols-2 sm:grid-cols-1 grid-rows-2 xs:grid-rows-4 gap-y-[20px] gap-x-[40px] ml-[154px] md:ml-0 md:justify-between"
  >
    <div class="flex items-center">
      <IconLocation />
      <p
        class="text-lightModeSecondaryBlue text-[1.5rem] xs:text-[1.3rem] ml-[19.12px] md:ml-[19.25px]"
      >
        San Francisco
      </p>
    </div>

    <div class="flex items-center">
      <IconTwitter />
      <a
        class="text-lightModeSecondaryBlue text-[1.5rem] xs:text-[1.3rem] ml-[16px] md:ml-[13.01]"
        href="#"
        >Not Available</a
      >
    </div>

    <div class="flex items-center">
      <IconWebsite />
      <a
        class="text-lightModeSecondaryBlue text-[1.5rem] xs:text-[1.3rem] ml-[16.01px] text-ellipsis overflow-hidden"
        href="#"
        >https://github.blog</a
      >
    </div>

    <div class="flex items-center">
      <IconCompany />
      <p
        class="text-lightModeSecondaryBlue text-[1.5rem] xs:text-[1.3rem] ml-[16px]"
      >
        @github
      </p>
    </div>
  </section>
</template>
