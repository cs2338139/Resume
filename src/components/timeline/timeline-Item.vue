<script setup>
import { defineProps, computed, toRefs, inject } from "vue";
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: {
      position: "",
      for: "",
      time: "",
      content: [],
    },
  },
});
const { data } = toRefs(props);

const changeUrlQuery = inject("changeUrlQuery");
</script>

<template>
  <div class="flex flex-col w-full mb-3 -ml-1.5">
    <div class="flex items-center mb-0.5 sm:mb-2">
      <div class="w-3 h-3 mr-10 bg-gray-300 rounded-full sm:mr-5"></div>
      <div class="px-2 py-1 text-xl font-bold sm:w-full bg-gray-300 rounded-md sm:text-2xl">
        <div class="inline">
          {{ data?.position }}
        </div>
        <span class="sm:hidden">｜</span>
        <div class="inline sm:hidden">
          {{ data?.for }}
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="w-3 mr-10 sm:mr-5"></div>
      <div>
        <div class="hidden text-xl font-bold sm:block">
          {{ data?.for }}
        </div>
        <div class="mb-1 text-lg font-semibold">
          {{ data?.time }}
        </div>
        <div>
          <div>
            <template v-for="(item, index) in data?.content" :key="index">
              <div v-if="item?.type === 'desc'" class="whitespace-pre-wrap">
                {{ item?.content }}
              </div>
              <div v-if="item?.type === 'line'" class="h-[1px] w-full bg-black my-2"></div>
              <ul v-if="item?.type === 'list-p'" class="list-disc text-sm pl-5">
                <li v-for="(_item, index) in item?.content" :key="index" @click="changeUrlQuery(_item?.query)" :class="{ 'hover:scale-105 transition duration-300 hover:text-white hover:bg-black cursor-pointer': _item?.query }">
                  <span>{{ _item?.title }}</span>
                  <span v-if="_item?.type" class="mr-1">
                    - <b>{{ _item?.type }}</b>
                  </span>
                  <a v-if="_item?.url?.url" :href="_item?.url?.url" target="_blank" class="link font-bold">{{ _item?.url?.text }}</a>
                </li>
              </ul>
              <ul v-if="item?.type === 'list-1'" class="list-disc text-[15px] pl-10">
                <li v-for="(_item, index) in item?.content" :key="index">{{ _item }}</li>
              </ul>
              <div v-if="item?.type === 'list-2'" class="grid grid-cols-2">
                <li v-for="(_item, index) in item?.content" :key="index">{{ _item }}</li>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
