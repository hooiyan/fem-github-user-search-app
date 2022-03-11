<template>
  <section class="grid grid-cols-4 grid-rows-2">
    <img
      src="https://source.unsplash.com/random"
      alt="username"
      class="rounded-full w-[117px] h-[117px] object-cover col-start-1 col-end-2 row-start-1 row-end-3"
    />

    <div class="flex justify-between col-start-2 col-end-5">
      <div class="mb-[20px]">
        <h1 class="font-bold text-[26px]">The Octocat</h1>
        <p class="text-lightModePrimaryBlue text-[1.6rem]">@octocat</p>
      </div>
      <p
        class="col-start-4 col-end-5 text-lightModeLightGray text-[1.5rem] mt-4"
      >
        Joined 25 Jan 2011
      </p>
    </div>

    <p
      class="col-start-2 col-end-5 row-start-2 row-end-3 text-[1.5rem] text-lightModeSecondaryBlue"
    >
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
      Quisque volutpat mattis eros.
      <!-- This profile has no bio -->
    </p>
  </section>
</template>
