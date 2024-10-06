<script setup>
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";
const { availableLocales, getLocaleMessage } = useI18n();

const router = useRouter();

function changeLanguage(lang) {
  router.push({
    hash: `#${lang}`,
  });
}
</script>

<template>
  <div class="border p-1 flex gap-2">
    <button v-for="locale in availableLocales" :key="locale" class="border p-1" @click="changeLanguage(locale)">
      {{ getLocaleMessage(locale).name }}
    </button>
  </div>
</template>

<style scoped></style>
