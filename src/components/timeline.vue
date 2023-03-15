<script setup>
const props = defineProps({});
</script>

<template>
  <div class="w-full">
    <div>
      <div class="text-3xl font-bold mb-3"><slot name="title" /></div>
      <div class="flex justify-between">
        <div class="bg-gray-300 w-[1px] ml-10"></div>
        <div class="grow flex flex-col">
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
