<script setup>
import { ref } from "vue";
import IconSearch from "../assets/IconSearch.vue";

const baseURL = "https://api.github.com/users";
const username = ref("");

const searchUser = () => {
  fetch(`${baseURL}/${username.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // =====Top=====
      // 1. avatar_url
      console.log(`Profile picture: ${data.avatar_url}`);
      // 2. name
      console.log(`Name: ${data.name}`);
      // 3. login
      console.log(`Username handler: ${data.login}`);
      // 4. created-at
      console.log(`Joined at: ${data.created_at.toDateString()}`);
      // 5. bio
      console.log(`Bio: ${data.bio}`);
      // =====Statistics=====
      // 1. public_repos
      console.log(`Public repos: ${data.public_repos}`);
      // 2. followers
      console.log(`Followers: ${data.followers}`);
      // 3. following
      console.log(`Following: ${data.following}`);
      // =====Bottom=====
      // 1. location
      console.log(`Location: ${data.location}`);
      // 2. twitter_username
      console.log(`Twitter: ${data.twitter_username}`);
      // 3. blog
      console.log(`Website: ${data.blog}`);
      // 4. company
      console.log(`Company: ${data.company}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<template>
  <form
    class="shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.198567)] flex items-center relative mt-[36px] mb-[24px] bg-lightModeWhitest rounded-[15px]"
    autocomplete="off"
    @submit.prevent="searchUser"
  >
    <IconSearch />
    <input
      type="text"
      name="username"
      id="username"
      placeholder="Search GitHub username..."
      class="py-[22px] pl-[80px] 2xs:pl-[40px] w-full rounded-2xl focus:outline-none placeholder:text-lightModeSecondaryBlue text-lightModeBlack caret-lightModePrimaryBlue text-[1.8rem] xs:text-[1.3rem] 2xs:text-[1.2rem]"
      v-model="username"
    />
    <input
      type="submit"
      value="Search"
      class="text-lightModeWhitest bg-lightModePrimaryBlue font-bold py-[12px] px-[24px] 2xs:px-[14px] rounded-[10px] absolute right-0 translate-x-[-10px] cursor-pointer hover:bg-myPrimaryBlueLighten xs:text-[1.4rem]"
    />
  </form>
</template>
