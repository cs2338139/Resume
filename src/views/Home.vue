<script setup>
import { inject } from "@vercel/analytics";
import { ref, reactive, computed, onMounted, provide, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import me from "/public/assets/images/resume/pic.jpeg";

import information from "../components/information.vue";
import skill from "../components/skill/skill.vue";
import introduction from "../components/introduction.vue";
import timeline from "../components/timeline/timeline.vue";
import popup from "../components/popup/popup.vue";
import localeBtn from "../components/localeBtn.vue";

const { locale, availableLocales, getLocaleMessage } = useI18n();
const info = ref({});
const field = ref({});
const projects = reactive({});
const currentKey = ref("");
const popupState = ref(false);
const router = useRouter();
const route = useRoute();

inject();

function changeUrlQuery(value) {
  if (!value) {
    router.push({
      path: "/",
      query: null,
      hash: route.hash,
    });
    return;
  }
  router.push({
    path: "/",
    query: { portfolio: value },
    hash: route.hash,
  });
}

function popupSwitch(value, key = null) {
  popupState.value = value;
  switch (value) {
    case true: {
      document.body.style.overflow = "hidden";
      currentKey.value = key;
      break;
    }
    case false: {
      document.body.style.overflow = "auto";
      break;
    }
  }
}

function createData() {
  const localeData = getLocaleMessage(locale.value);

  info.value = localeData.info;
  field.value = localeData.field;
  localeData.portfolio.forEach((x) => {
    const key = x.key;
    projects[key] = x;
  });
}

function pushToDefaultLang() {
  const browserLang = navigator.language || navigator.userLanguage;
  let targetLang = "";
  if (availableLocales.includes(browserLang)) {
    targetLang = browserLang;
  } else {
    targetLang = "en";
  }

  router.push({
    path: "/",
    hash: `#${targetLang}`,
    query: route.query,
  });
}

onMounted(() => {
  document.body.addEventListener("keyup", (e) => {
    if (popupState.value === false) return;
    if (e.key === "Escape") {
      router.push({
        path: "/",
        hash: route.hash,
        query: null,
      });
    }
  });

  watch(
    () => route.query.portfolio,
    (value) => {
      if (value) {
        popupSwitch(true, value);
      } else {
        popupSwitch(false);
      }
    },
    { immediate: true }
  );

  watch(
    () => route.hash,
    (value) => {
      if (value) {
        const lang = value.replace("#", "");
        if (availableLocales.includes(lang)) {
          locale.value = lang;
          createData();
        } else {
          pushToDefaultLang();
        }
      } else {
        pushToDefaultLang();
      }
    },
    { immediate: true }
  );
});

const baseUrl = computed(() => {
  if (process.env.NODE_ENV === "development") return "/public";
  return "";
});

const webUrl = computed(() => {
  if (process.env.NODE_ENV === "development") return "http://localhost:5173";
  return "https://resume.jinchengliang.com/";
});

provide("baseUrl", baseUrl);
provide("changeUrlQuery", changeUrlQuery);
provide("field", field);
</script>

<template>
  <div class="wrap flex flex-col items-center">
    <div class="border relative border-gray-100 shadow-xl wrapInner">
      <!-- <localeBtn class="absolute right-5 top-5 md:fixed" /> -->
      <information :data="{ img: me, ...info?.information }" class="mb-5" :email="info?.mail" :linkedin="info?.linkedin" :img="me">
        <template #portfolio>
          <div class="flex gap-2 mt-1">
            <a href="https://resume.jinchengliang.com/?portfolio=portfolio" class="border-2 border-black px-10 origin-center sm:w-full rounded-2xl bg-black text-white hover:bg-white hover:text-black transition-all duration-300">{{ field?.portfolio }}</a>
            <!-- <button @click="changeUrlQuery('portfolio')" class="border-2 border-black px-10 origin-center sm:w-full rounded-2xl bg-black text-white hover:bg-white hover:text-black transition-all duration-300">{{ field?.portfolio }}</button> -->
            <a v-if="info?.information?.github" target="_blank" :href="info?.information?.github" class="border-2 border-black px-10 origin-center sm:w-full rounded-2xl hover:bg-black hover:text-white bg-white text-black transition-all duration-300">GitHub</a>
          </div>
        </template>
      </information>
      <introduction class="mb-6" :data="{ title: field?.introduction, content: info?.introduction }" />
      <skill class="mb-5" :data="{ title: field?.skill, content: info?.skill }" />
      <timeline :data="{ title: field?.experience, content: info?.experience }" class="mb-10" />
      <div class="bg-gray-300 my-7 h-[1px] w-full mx-auto" />
      <timeline class="mb-5" :data="{ title: field?.education, content: info?.education }" />

      <!-- <div class="bg-gray-300 my-14 h-[1.5px] w-3/4 mx-auto" /> -->
      <!-- <buttonPortfolio @open="changeUrlQuery('portfolio')" class="mb-5 sm:mb-10" link="https://www.behance.net/JinChengLiang"> {{ field?.portfolio }}</buttonPortfolio> -->
    </div>
    <popup :_data="projects" :_key="currentKey" v-if="popupState" />
  </div>
</template>

<style scoped></style>
