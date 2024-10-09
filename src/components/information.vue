<script setup>
import { useI18n } from "vue-i18n";
import { toRefs } from "vue";
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: {
      img: "",
      name: "",
      enName: "",
      title: "",
      skill: "",
      place: "",
      email: "",
      linkedin: "",
      phone: "",
      img: "",
    },
  },
});

const { data } = toRefs(props);
const { locale } = useI18n();
</script>

<template>
  <div class="flex justify-between w-full text-justify sm:flex-col sm:h-auto sm:items-center" :class="[locale === 'zh-TW' ? 'h-48' : '']">
    <div v-if="locale === 'zh-TW'" class="overflow-hidden flex items-center justify-center rounded-md border aspect-square h-full mr-10 sm:w-1/2 sm:mr-0 sm:mb-5">
      <img class="object-cover w-full h-full" :src="data.img" />
    </div>
    <div class="grow flex flex-col justify-around" :class="[locale === 'zh-TW' ? 'items-start sm:items-center' : 'items-center']">
      <div class="flex flex-col sm:items-center">
        <div class="flex gap-5 items-end sm:flex-col sm:gap-0 sm:items-center">
          <div class="font-semibold text-4xl">
            {{ data.name }}
          </div>
          <div class="text-2xl sm:text-base">
            {{ data.enName }}
          </div>
        </div>
      </div>

      <div class="flex flex-col" :class="[locale === 'zh-TW' ? 'items-start sm:items-center' : 'items-center']">
        <div class="text-xl font-semibold sm:text-2xl">
          {{ data.title }}
        </div>
        <div v-if="locale === 'zh-TW'">
          {{ data.skill }}
        </div>
      </div>

      <div class="flex flex-col" :class="[locale === 'zh-TW' ? 'items-start sm:items-center' : 'items-center']">
        <div class="flex" :class="[locale === 'zh-TW' ? 'flex-col items-start sm:items-center' : 'flex-row-reverse sm:flex-col-reverse items-center']">
          <div>
            <span v-if="locale === 'en'" class="sm:hidden">｜</span>
            <span v-if="locale === 'en'">{{ data.phone }}・</span>
            {{ data.place }}
          </div>
          <div>
            <a :href="'mailto:' + data?.email" class="link"> {{ data.email }} </a>｜
            <a class="link" target="_blank" :href="data?.linkedin">Linkedin</a>
            <span v-if="locale === 'zh-TW'">｜{{ data.phone }}</span>
          </div>
        </div>

        <div>
          <slot name="portfolio" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
