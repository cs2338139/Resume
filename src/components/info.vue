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
  <div class="flex justify-between w-full h-48 text-justify sm:flex-col sm:h-auto sm:items-center">
    <div class="overflow-hidden flex items-center shadow-xl justify-center rounded-md border aspect-square h-full mr-10 sm:w-1/2 sm:mr-0 sm:mb-5">
      <img class="object-cover w-full h-full" :src="img" />
    </div>
    <div class="grow flex flex-col justify-around sm:items-center">
      <div class="flex flex-col sm:items-center">
        <div class="flex gap-5 items-end sm:flex-col sm:gap-0 sm:items-center">
          <div class="font-semibold text-4xl">
            <slot name="name" />
          </div>
          <div class="text-2xl sm:text-base">
            <slot name="enName" />
          </div>
        </div>
        <!-- <div><slot name="birthday" /></div> -->
      </div>

      <div class="flex flex-col sm:items-center">
        <div class="text-xl font-semibold sm:text-2xl"><slot name="title" /></div>
        <div><slot name="skill" /></div>
        <!-- <div><slot name="education" /></div> -->
      </div>

      <div class="flex flex-col sm:items-center">
        <div><slot name="place" /></div>
        <div>
          <a :href="'mailto:' + email" class="link"> <slot name="mail" /> </a>｜<a class="link" target="_blank" href="https://www.linkedin.com/in/jin-cheng-liang-320103206/">Linkedin</a>｜<slot name="phone" />
        </div>

        <div>
          <slot name="portfolio" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
