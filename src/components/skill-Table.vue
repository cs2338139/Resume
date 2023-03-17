<script setup>
const props = defineProps({});
</script>

<template>
  <div class="grow px-2 mb-3">
    <hr class="my-2 border border-gray-300">
    <div class="text-xl font-bold mb-2"><slot name="title" /></div>
    <ul class="flex flex-col list-disc list-inside">
      <slot name="content" />
    </ul>
</div>
</template>

<style></style>
