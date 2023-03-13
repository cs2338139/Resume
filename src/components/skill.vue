<script setup>
const props = defineProps({});
</script>

<template>
  <div class="w-full text-justify">
    <div>
      <div class="text-3xl font-bold mb-1"><slot name="title" /></div>
      <div class="flex justify-between">
        <slot name="content"/>
      </div>
    </div>
  </div>
</template>

<style></style>
