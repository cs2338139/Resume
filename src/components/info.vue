<script setup>
const props = defineProps({
  email: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="flex justify-between w-full h-60 text-justify dev-pinks">
    <div class="w-1/3 h-full px-10 mr-5 dev-pinks">
      <div class="bg-gray-400 w-full h-full"></div>
    </div>
    <div class="grow flex flex-col justify-around dev-pinks">
      <div>
        <div class="font-bold text-4xl"><slot name="name" /></div>
        <div class="text-2xl"><slot name="enName" /></div>
        <div><slot name="birthday" /></div>
      </div>

      <div>
        <div class="text-lg font-bold mb-0.5"><slot name="skill" /></div>
        <div><slot name="education" /></div>
      </div>

      <div>
        <div><slot name="place" /></div>
        <div>
          <a :href="'mailto:' + email" class="link"> <slot name="mail" /> </a>｜<slot name="phone" />
        </div>
        <div><span>作品集：</span><a href="https://www.behance.net/JinChengLiang" class="link">Behance 作品集</a></div>
      </div>
    </div>
  </div>
</template>

<style>
.link {
  @apply text-blue-600 hover:underline hover:text-blue-900;
}
</style>
