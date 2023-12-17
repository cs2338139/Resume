<script setup>
import { ref, reactive, toRefs, computed, onMounted, watchEffect } from "vue";
import popupSingle from "./popup-single.vue";
import popupPortfolio from "./popup-Portfolio.vue";
const props = defineProps({
  _data: {
    type: Object,
    default: null,
  },
  _key: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["close"]);
const data = ref();
const { _data, _key } = toRefs(props);

onMounted(() => {
  watchEffect(() => {
    data.value = _data.value[_key.value];
  });
});
</script>

<template>
  <div class="w-full flex flex-col justify-center items-center h-screen top-0 fixed">
    <div class="w-full h-full absolute top-0 bg-black/80" @click="emits('close')"></div>
    <div class="relative max-w-[1200px] flex justify-end w-full">
      <button @click="emits('close')" class="w-16 h-16 hover:scale-110 origin-center duration-300 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="white" d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
        </svg>
      </button>
    </div>
    <div class="relative max-w-[1200px] p-12 w-full gap-10 h-[90vh] overflow-auto bg-white flex flex-col items-center">
      <popupPortfolio v-if="_key.toLowerCase() === 'portfolio'" />
      <popupSingle v-else :data="data" />
    </div>
  </div>
</template>

<style></style>
