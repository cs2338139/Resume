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
    <a :href="link" target="_blank" class="link before:content-['👉']  before:mr-2"><slot /></a>
  </div>
</template>

<style></style>
