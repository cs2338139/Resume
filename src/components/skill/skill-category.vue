<script setup>
import { toRefs } from "vue";
import skillTable from "./skill-Table.vue";
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: [],
  },
});

const { data } = toRefs(props);
</script>

<template>
  <div class="w-full mt-1">
    <div class="flex justify-between flex-wrap">
      <skillTable :data="item" v-for="(item, index) in data" :key="index" />
    </div>
  </div>
</template>

<style></style>
