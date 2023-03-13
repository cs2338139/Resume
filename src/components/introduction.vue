<script setup>
const props = defineProps({});
</script>

<template>
  <div class="w-full">
    <div>
      <div class="text-3xl font-bold mb-3"><slot name="title" /></div>
      <div class="text-justify">
        <slot name="content"/>
      </div>
    </div>
  </div>
</template>

<style></style>
