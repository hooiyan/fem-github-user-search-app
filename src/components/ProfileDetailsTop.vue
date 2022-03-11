<template>
  <section class="grid grid-cols-4 grid-rows-2">
    <img
      src="https://source.unsplash.com/random"
      alt="username"
      class="rounded-full w-[117px] h-[117px] sm:w-[90px] sm:h-[90px] xs:w-[70px] xs:h-[70px] object-cover col-start-1 col-end-2 row-start-1 row-end-3 md:row-end-2"
    />

    <div
      class="flex md:flex-col justify-between md:justify-center xs:justify-start col-start-2 col-end-5 md:ml-[41px] sm:ml-[19px]"
    >
      <div class="mb-[20px] md:mb-[4px]">
        <h1 class="font-bold text-[2.6rem] xs:text-[1.6rem]">The Octocat</h1>
        <h3 class="text-lightModePrimaryBlue text-[1.6rem] xs:text-[1.3rem]">
          @octocat
        </h3>
      </div>
      <p
        class="text-lightModeLightGray text-[1.5rem] xs:text-[1.3rem] mt-4 md:mt-0"
      >
        Joined 25 Jan 2011
      </p>
    </div>

    <p
      class="col-start-2 md:col-start-1 col-end-5 row-start-2 row-end-3 leading-[25px] text-[1.5rem] xs:text-[1.3rem] text-lightModeSecondaryBlue md:mt-[24px] 2xs:mt-[10px] 3xs:mt-0"
    >
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
      Quisque volutpat mattis eros.
      <!-- This profile has no bio -->
    </p>
  </section>
</template>
