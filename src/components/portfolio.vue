<script setup>
const props = defineProps({
  link: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="font-bold text-3xl text-center before:content-['👉'] before:mr-2 after:ml-3">
    <a :href="link" target="_blank" class="link"><slot /></a>
  </div>
</template>

<style></style>
