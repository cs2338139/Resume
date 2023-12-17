<script setup>
import { onMounted, inject, toRefs } from "vue";

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
});

const { data } = toRefs(props);
const baseUrl = inject("baseUrl");
const changeUrlQuery = inject("changeUrlQuery");
</script>

<template>
  <div class="w-full relative cursor-pointer group rounded-md overflow-hidden" @click="changeUrlQuery(data.key)">
    <div class="overflow-hidden w-full">
      <img class="group-hover:scale-125 duration-500 transition-transform" v-if="data?.cover" :src="`${baseUrl}/assets/images/portfolio/${data.key}/${data.cover}`" alt="" />
    </div>
    <div v-if="data?.name" class="group-hover:bg-black/50 text-base duration-500 overflow-hidden transition-colors bg-white/50 absolute bottom-0 font-bold">
      <div class="group-hover:text-white duration-500 transition-all py-1 px-2 group-hover:-translate-y-full">{{ data?.name }}</div>
      <div class="group-hover:text-white duration-500 bottom-0 py-1 px-2 transition-all translate-y-full absolute group-hover:translate-y-0">{{ data?.name }}</div>
    </div>
  </div>
</template>

<style scoped></style>
