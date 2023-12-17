<script setup>
// const props = defineProps({
//   link: {
//     type: String,
//     default: "",
//   },
// });

const emits = defineEmits(["open"]);
</script>

<template>
  <div class="flex justify-center items-center w-full">
    <button @click="emits('open')" class="font-bold text-4xl sm:text-3xl origin-center hover:scale-110 hover:text-blue-500 transition-all duration-300">👉 <slot /> 👈</button>
  </div>
</template>

<style></style>
