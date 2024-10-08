<script setup>
import { toRefs } from "vue";
import skillCategory from "./skill-category.vue";
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: {
      title: "",
      content: [],
    },
  },
});

const { data } = toRefs(props);
</script>

<template>
  <div class="w-full">
    <div class="text-3xl font-bold mb-1">
      {{ data?.title }}
    </div>
    <skillCategory :data="data?.content" />
  </div>
</template>

<style></style>
