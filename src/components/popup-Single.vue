<script setup>
import { inject, toRefs, onMounted, watchEffect, computed } from "vue";
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

onMounted(() => {
  watchEffect(() => {
  });
});

</script>

<template>
  <div class="flex flex-col items-center gap-10 md:gap-5">
    <img v-if="data?.cover" :src="`${baseUrl}/assets/images/portfolio/${data.key}/${data.cover}`" alt="" />
    <div class="px-20 lg:px-5 md:px-0 flex flex-col items-start gap-8 md:gap-5">
      <div v-if="data?.name" class="text-3xl font-bold md:text-2xl">{{ data?.name }}</div>
      <div class="text-lg md:text-base font-light text-gray-800 flex flex-col gap-1" v-if="data?.desc && data?.desc.length != 0">
        <div class="" v-for="(d, index) in data?.desc" :key="index">{{ d }}</div>
      </div>
      <div class="text-xl font-light md:text-lg">
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
        <popupSingleInfo v-if="data?.links && data?.links.length != 0">
          <template #title>連結：</template>
          <template v-for="(_link, index) in data?.links" :key="index">
            <a v-if="_link?.url" class="text-blue-500" :href="_link?.url" target="_blank">{{ _link?.title }}</a>
            <span v-else class="italic font-medium text-gray-500">{{ _link?.title }}</span>
            <span :class="{ hidden: index === data.links.length - 1 }">｜</span>
          </template>
        </popupSingleInfo>
      </div>
      <div class="flex justify-between w-full md:flex-col gap-5" v-if="(data?.works && data?.works.length != 0) || (data?.tools && data?.tools.length != 0)">
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
        <popupSingleTable v-if="data?.interactions && data?.interactions.length != 0">
          <template #title>互動方式：</template>
          <template #content>
            <popupSingleTableItem v-for="(tool, index) in data?.interactions" :key="index">{{ tool }}</popupSingleTableItem>
          </template>
        </popupSingleTable>
      </div>
    </div>
    <div class="flex flex-col gap-8 justify-center items-center md:gap-2 w-full" v-if="data?.ytIDs && data?.ytIDs.length != 0">
      <div v-for="(ytID, index) in data?.ytIDs" class="w-full aspect-video flex gap-2 md:flex-col" :key="index">
        <iframe width="100%" height="100%" :src="`https://www.youtube.com/embed/${ytID}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
    <div class="flex flex-col gap-8 justify-center items-center md:gap-2" v-if="data?.images && data?.images.length != 0">
      <div v-for="(items, index) in data?.images" class="justify-between items-start flex gap-4 md:flex-col" :key="index">
        <template v-if="Array.isArray(items)">
          <div v-for="(img, _index) in items" :key="_index" class="border">
            <img :src="`${baseUrl}/assets/images/portfolio/${data.key}/${img}`" alt="" />
          </div>
        </template>
        <div v-else class="flex flex-col gap-4">
          <div v-for="(img, _index) in items?.images" :key="_index" class="border">
            <img :src="`${baseUrl}/assets/images/portfolio/${data.key}/${img}`" alt="" />
          </div>
          <div class='text-base text-gray-500' v-if="items?.desc">．{{ items?.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
