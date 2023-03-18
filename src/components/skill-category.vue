<script setup>
const props = defineProps({});
</script>

<template>
  <div class="w-full mt-5">
    <div class="bg-gray-300 p-2 rounded-md text-2xl font-bold mb-1"><slot name="title" /></div>
    <div class="flex justify-between flex-wrap">
      <slot name="content" />
    </div>
  </div>
</template>

<style></style>
