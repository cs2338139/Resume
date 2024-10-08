<script setup>
import { toRefs } from "vue";
import skillTableItem from "./skill-Table-Item.vue";
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
  <div class="flex flex-col">
    <div class="grow px-2 mb-3">
      <hr class="my-2 border border-gray-300" />
      <div class="text-xl font-bold mb-2">
        {{ data?.title }}
      </div>
      <ul class="flex flex-col list-disc pl-5">
        <skillTableItem v-for="(skill, _index) in data?.content" :key="_index">{{ skill }}</skillTableItem>
      </ul>
    </div>
  </div>
</template>

<style></style>
