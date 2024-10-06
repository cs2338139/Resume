<script setup>
import { toRefs } from "vue";
import { onMounted } from "vue";
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
        {{ data?.title }}
      </div>
      <div>
        <div class="flex flex-col gap-1.5">
          <div class="whitespace-pre-wrap" v-for="(d, index) in data?.content" :key="index">{{ d }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
