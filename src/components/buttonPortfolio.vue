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
    <button @click="emits('open')" class="font-bold text-4xl sm:text-3xl origin-center w-1/4 sm:w-full shadow-2xl sm:rounded-sm rounded-2xl hover:w-full bg-black text-white hover:rounded-sm py-3 transition-all duration-300">
      <slot />
    </button>
  </div>
</template>

<style></style>
