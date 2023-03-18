<script setup>
const props = defineProps({});
</script>

<template>
  <div class="flex flex-col w-full mb-3 -ml-1.5 dev-red2">
    <div class="flex items-center mb-0.5 dev-red2 sm:mb-2">
      <div class="w-3 h-3 mr-10 bg-gray-300 rounded-full sm:mr-5 dev-red2"></div>
      <div class="px-2 py-1 text-xl font-bold sm:w-full bg-gray-300 rounded-md sm:text-2xl dev-red2">
        <div class="inline"><slot name="position" /></div>
        <span class="sm:hidden">｜</span>
        <div class="inline sm:hidden"><slot name="company" /></div>
      </div>
    </div>
    <div class="flex dev-red2">
      <div class="w-3 mr-10 sm:mr-5 dev-red2"></div>
      <div class="text-justify dev-red2">
        <div class="hidden text-xl font-bold sm:block"><slot name="company" /></div>
        <div class="mb-1 text-lg font-semibold dev-red2"><slot name="time" /></div>
        <div class="dev-red2"><slot name="content" /></div>
      </div>
    </div>
  </div>
</template>

<style></style>
