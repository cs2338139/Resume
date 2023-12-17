<script setup>
import { inject, toRefs, onMounted } from "vue";
import popupPortfolioItem from "./popup-Portfolio-Item.vue";

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
});

const { data } = toRefs(props);
const baseUrl = inject("baseUrl");
</script>

<template>
  <div class="grid grid-cols-3 gap-5 sm:grid-cols-1 lg:grid-cols-2">
    <!-- <popupPortfolioItem v-for="(item, index) in 10" :key="index" :data="data?.ws_new" /> -->
    <popupPortfolioItem v-for="(item, index) in data" :key="index" :data="item" />
  </div>
</template>

<style scoped></style>
