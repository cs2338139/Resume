<script setup>
const props = defineProps({});
</script>

<template>
  <div class="flex flex-col w-full mb-3 -ml-1.5">
    <div class="flex items-center mb-0.5">
      <div class="bg-gray-300 w-3 h-3 rounded-full mr-10"></div>
      <div class="font-bold text-xl bg-gray-300 px-2 py-1 rounded-md">
        <span><slot name="position" /></span> ｜ <span><slot name="company" /></span>
      </div>
    </div>
    <div class="flex">
      <div class="mr-10 w-3"></div>
      <div class="text-justify">
        <div class="mb-1 font-semibold text-lg"><slot name="time" /></div>
        <div><slot name="content" /></div>
      </div>
    </div>
  </div>
</template>

<style></style>
