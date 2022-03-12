<script setup>
import IconSearch from "../assets/IconSearch.vue";
</script>

<template>
  <form
    class="shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.198567)] flex items-center relative mt-[36px] mb-[24px] bg-lightModeWhitest rounded-[15px]"
  >
    <IconSearch />
    <input
      type="text"
      name="username"
      id="username"
      placeholder="Search GitHub username..."
      class="py-[22px] pl-[80px] 2xs:pl-[40px] w-full rounded-2xl focus:outline-none placeholder:text-lightModeSecondaryBlue text-lightModeBlack caret-lightModePrimaryBlue text-[1.8rem] xs:text-[1.3rem] 2xs:text-[1.2rem]"
    />
    <input
      type="submit"
      value="Search"
      class="text-lightModeWhitest bg-lightModePrimaryBlue font-bold py-[12px] px-[24px] 2xs:px-[14px] rounded-[10px] absolute right-0 translate-x-[-10px] cursor-pointer hover:bg-myPrimaryBlueLighten xs:text-[1.4rem]"
    />
  </form>
</template>
