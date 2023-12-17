<script setup>
import { inject, toRefs } from "vue";
import popupSingleTable from "./popup-Single-Table.vue";
import popupSingleTableItem from "./popup-Single-Table-Item.vue";
import popupSingleInfo from "./popup-Single-Info.vue";

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
  <div>
    <img v-if="data?.cover" :src="`${baseUrl}/assets/images/portfolio/${data.key}/${data.cover}`" alt="" />
    <div class="px-20 flex flex-col items-start gap-8">
      <div v-if="data?.name" class="text-3xl font-bold">{{ data?.name }}</div>
      <div class="text-lg font-light text-gray-800 flex flex-col gap-1" v-if="data?.desc && data?.desc.length != 0">
        <div class="" v-for="(d, index) in data?.desc" :key="index">{{ d }}</div>
      </div>
      <div class="text-xl font-light">
        <popupSingleInfo v-if="data?.type">
          <template #title>類型：</template>
          {{ data?.type }}
        </popupSingleInfo>
        <popupSingleInfo v-if="data?.date">
          <template #title>日期：</template>
          {{ data?.date }}
        </popupSingleInfo>
        <popupSingleInfo v-if="data?.client">
          <template #title>客戶：</template>
          {{ data?.client }}
        </popupSingleInfo>
        <popupSingleInfo v-if="data?.link">
          <template #title>連結：</template>
          <a :href="data?.link" class="text-blue-500" target="_blank" rel="noreferrer noopener">{{ data?.link }}</a>
        </popupSingleInfo>
      </div>
      <div class="flex justify-between w-full" v-if="(data?.works && data?.works.length != 0) || (data?.tools && data?.tools.length != 0)">
        <popupSingleTable v-if="data?.works && data?.works.length != 0">
          <template #title>工作項目：</template>
          <template #content>
            <popupSingleTableItem v-for="(work, index) in data?.works" :key="index">{{ work }}</popupSingleTableItem>
          </template>
        </popupSingleTable>
        <popupSingleTable v-if="data?.tools && data?.tools.length != 0">
          <template #title>使用工具：</template>
          <template #content>
            <popupSingleTableItem v-for="(tool, index) in data?.tools" :key="index">{{ tool }}</popupSingleTableItem>
          </template>
        </popupSingleTable>
      </div>
    </div>
    <div class="flex flex-col gap-8 justify-center items-center" v-if="data?.images && data?.images.length != 0">
      <div v-for="(imgs, index) in data?.images" class="justify-between items-start flex gap-2" :key="index">
        <div v-for="(img, _index) in imgs" :key="_index">
          <img :src="`${baseUrl}/assets/images/portfolio/${data.key}/${img}`" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
