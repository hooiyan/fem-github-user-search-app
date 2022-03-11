<script setup>
import TopHeader from "./components/TopHeader.vue";
import SearchBar from "./components/SearchBar.vue";
import ProfileCard from "./components/ProfileCard.vue";
</script>

<template>
  <div
    class="flex flex-col justify-center my-[144px] md:mt-[140px] md:mx-[98px] sm:mx-[40px] xs:mx-[24px]"
  >
    <TopHeader />
    <SearchBar />
    <ProfileCard />
  </div>
</template>
