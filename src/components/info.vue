<script setup>
const props = defineProps({
  email: {
    type: String,
    default: "",
  },
  portfolio: {
    type: String,
    default: "",
  },
  img: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="flex justify-between w-full h-60 text-justify sm:flex-col sm:h-auto sm:items-center">
    <div class="overflow-hidden flex items-center shadow-xl justify-center rounded-md border w-1/3 h-full mr-14 sm:w-2/3 sm:mr-0 sm:mb-5">
      <img class="object-cover w-full h-full" :src="img" />
    </div>
    <div class="grow flex flex-col justify-around sm:items-center">
      <div class="flex flex-col sm:items-center">
        <div class="font-bold text-4xl"><slot name="name" /></div>
        <div class="text-2xl"><slot name="enName" /></div>
        <div><slot name="birthday" /></div>
      </div>

      <div class="flex flex-col sm:items-center">
        <div class="text-lg font-bold mb-0.5"><slot name="skill" /></div>
        <div><slot name="education" /></div>
      </div>

      <div class="flex flex-col sm:items-center">
        <div><slot name="place" /></div>
        <div>
          <a :href="'mailto:' + email" class="link"> <slot name="mail" /> </a>｜<slot name="phone" />
        </div>
        <div>
          <span class="font-bold">作品集：</span><a :href="portfolio" target="_blank" class="link"><slot name="portfolio" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
