<script setup>
import { inject, toRefs } from "vue";

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
});

const { data } = toRefs(props);
</script>

<template>
  <div></div>
</template>

<style scoped></style>
