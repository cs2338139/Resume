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
  <div class="flex justify-center items-center w-full group duration-300">
    <a target="_blank" href="https://resume.jinchengliang.com/?portfolio=portfolio" class="font-bold text-4xl md:text-3xl origin-center text-center w-1/4 md:w-full md:rounded-sm rounded-2xl hover:w-full bg-black text-white hover:rounded-sm py-3 transition-all duration-300">
      <slot />
    </a>
  </div>
</template>

<style></style>
