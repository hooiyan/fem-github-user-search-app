<script setup>
import IconSearch from "../assets/IconSearch.vue";
</script>

<template>
  <form
    class="drop-shadow=[hsla(227, 46%, 51%, 0.2)] flex items-center relative mt-[36px] mb-[24px] bg-lightModeWhitest rounded-[15px]"
  >
    <IconSearch />
    <input
      type="text"
      name="username"
      id="username"
      placeholder="Search GitHub username..."
      class="py-[22px] pl-[80px] w-full rounded-2xl focus:outline-none placeholder:text-lightModeSecondaryBlue text-lightModeBlack caret-lightModePrimaryBlue text-[18px]"
    />
    <input
      type="submit"
      value="Search"
      class="text-lightModeWhitest bg-lightModePrimaryBlue font-bold py-[12px] px-[24px] rounded-[10px] absolute right-0 translate-x-[-10px] cursor-pointer hover:bg-myPrimaryBlueLighten"
    />
  </form>
</template>
