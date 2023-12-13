<script setup>
import { ref, reactive, toRefs, onMounted } from "vue";
import popupTable from "../components/popup-Table.vue";
import popupTableItem from "../components/popup-Table-Item.vue";
import popupInfo from "../components/popup-Info.vue";
const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
});

const emits = defineEmits(["close"]);
const { data } = toRefs(props);

onMounted(() => {
  console.log(data.value);
});
</script>

<template>
  <div class="w-full flex flex-col justify-center items-center h-screen top-0 fixed">
    <div class="w-full h-full absolute top-0 bg-black" @click="emits('close')"></div>
    <div class="relative max-w-[1200px] flex justify-end w-full">
      <button @click="emits('close')" class="w-16 h-16 hover:scale-110 origin-center duration-300 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="white" d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
        </svg>
      </button>
    </div>
    <div class="relative max-w-[1200px] p-12 w-full gap-10 h-[90vh] overflow-auto bg-white flex flex-col items-center">
      <img v-if="data?.cover" :src="`/public/assets/images/portfolio/${data.key}/${data.cover}`" alt="" />
      <div class="px-20 flex flex-col items-start gap-8">
        <div v-if="data?.name" class="text-3xl font-bold">{{ data?.name }}</div>
        <div class="text-lg font-light text-gray-800 flex flex-col gap-1" v-if="data?.desc && data?.desc.length != 0">
          <div class="" v-for="(d, index) in data?.desc" :key="index">{{ d }}</div>
        </div>
        <div class="text-xl font-light">
          <popupInfo v-if="data?.type">
            <template #title>類型：</template>
            {{ data?.type }}
          </popupInfo>
          <popupInfo v-if="data?.date">
            <template #title>日期：</template>
            {{ data?.date }}
          </popupInfo>
          <popupInfo v-if="data?.client">
            <template #title>客戶：</template>
            {{ data?.client }}
          </popupInfo>
          <popupInfo v-if="data?.link">
            <template #title>連結：</template>
            <a :href="data?.link" class="text-blue-500" target="_blank" rel="noreferrer noopener">{{ data?.link }}</a>
          </popupInfo>
        </div>
        <div class="flex justify-between w-full" v-if="(data?.works && data?.works.length != 0) || (data?.tools && data?.tools.length != 0)">
          <popupTable v-if="data?.works && data?.works.length != 0">
            <template #title>工作項目：</template>
            <template #content>
              <popupTableItem v-for="(work, index) in data?.works" :key="index">{{ work }}</popupTableItem>
            </template>
          </popupTable>
          <popupTable v-if="data?.tools && data?.tools.length != 0">
            <template #title>使用工具：</template>
            <template #content>
              <popupTableItem v-for="(tool, index) in data?.tools" :key="index">{{ tool }}</popupTableItem>
            </template>
          </popupTable>
        </div>
      </div>
      <div class="flex flex-col gap-8 justify-center items-center" v-if="data?.images && data?.images.length != 0">
        <div v-for="(imgs, index) in data?.images" class="justify-between items-start flex gap-2" :key="index">
          <div v-for="(img, _index) in imgs" :key="_index">
            <img :src="`/public/assets/images/portfolio/${data.key}/${img}`" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
