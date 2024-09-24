<script setup>
import { ref, reactive, toRefs, computed, onMounted, watchEffect, inject } from "vue";
import popupSingle from "./popup-Single.vue";
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

// const emits = defineEmits(["close"]);
const changeUrlQuery = inject("changeUrlQuery");
const data = ref();
const { _data, _key } = toRefs(props);

onMounted(() => {
  watchEffect(() => {
    if (_key.value.toLowerCase() === "portfolio") {
      data.value = _data.value;
    } else {
      data.value = _data.value[_key.value];
    }
  });
});
</script>

<template>
  <div class="w-full flex flex-col justify-center items-center h-screen top-0 md:justify-start fixed">
    <div class="w-full h-full absolute top-0 bg-black/80" @click="changeUrlQuery()"></div>
    <div class="relative max-w-[1200px] flex justify-between w-full top-0 md:mt-5 sm:mt-2 pointer-events-none">
      <button @click="changeUrlQuery('portfolio')" :class="{ invisible: _key.toLowerCase() === 'portfolio' }" class="w-16 h-16 sm:w-12 sm:h-12 hover:scale-110 origin-center pointer-events-auto duration-300 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="text-white">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292" />
        </svg>
      </button>
      <button @click="changeUrlQuery()" class="w-16 h-16 sm:w-12 sm:h-12 hover:scale-110 origin-center duration-300 transition-transform pointer-events-auto">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="text-white">
          <path fill="white" d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" stroke="currentColor" />
        </svg>
      </button>
    </div>
    <div class="relative max-w-[1200px] p-12 lg:p-8 sm:p-6 w-full h-[90vh] md:h-[92vh] overflow-auto bg-white">
      <popupPortfolio :data="data" v-if="_key.toLowerCase() === 'portfolio'" />
      <popupSingle v-else :data="data" />
    </div>
  </div>
</template>

<style></style>
