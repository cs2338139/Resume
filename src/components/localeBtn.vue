<script setup>
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";
const { locale, availableLocales, getLocaleMessage } = useI18n();

const router = useRouter();
const route = useRoute();

function changeLanguage(lang) {
  router.push({
    path: "/",
    hash: `#${lang}`,
    query: route.query,
  });
}
</script>

<template>
  <div class="border p-1 flex gap-1 md:flex-col bg-white">
    <button v-for="_locale in availableLocales" :key="_locale" class="border text-lg py-1 px-3 md:text-base md:px-2" :disabled="_locale === locale" @click="changeLanguage(_locale)" :class="[_locale === locale ? 'bg-black text-white' : 'bg-white text-black']">
      {{ getLocaleMessage(_locale).name }}
    </button>
  </div>
</template>

<style scoped></style>
