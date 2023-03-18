<script setup>
const props = defineProps({
  link: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="font-bold text-3xl text-center">
    <div class="inline-block w-10">👉</div>
    <a :href="link" target="_blank" class="link"><slot /></a>
    <div class="inline-block w-10"></div>
  </div>
</template>

<style></style>
