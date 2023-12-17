<script setup></script>

<template>
  <div class="flex justify-between w-full">
    <div class="w-full">
      <div class="font-medium text-xl">
        <slot name="title" />
      </div>
      <ul class="text-lg list-disc list-inside pl-2">
        <slot name="content" />
      </ul>
    </div>
  </div>
</template>

<style></style>
