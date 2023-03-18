<script setup>
const props = defineProps({});
</script>

<template>
  <div class="w-full">
    <div class="text-3xl font-bold mb-1"><slot name="title" /></div>
    <div class="flex flex-col">
      <slot name="content" />
    </div>
  </div>
</template>

<style></style>
