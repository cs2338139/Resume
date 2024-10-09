<script setup>
import { defineProps, toRefs } from "vue";
import timelineItem from "./timeline-Item.vue";
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
    <div>
      <div class="text-3xl font-bold mb-3">
        {{ data.title }}
      </div>
      <div class="flex justify-between">
        <div class="bg-gray-300 w-[1px] ml-5"></div>
        <div class="grow flex flex-col">
          <timelineItem v-for="(item, index) in data?.content" :key="index" :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
