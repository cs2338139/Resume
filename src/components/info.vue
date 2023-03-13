<script setup>
const props = defineProps({
  email: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="flex justify-between w-full dev-black h-72 text-justify">
    <div class="w-5/12 px-10 mr-5">
      <div class="bg-gray-400 w-full h-full"></div>
    </div>
    <div class="grow flex flex-col justify-between">
      <div>
        <span class="font-bold text-2xl mr-2"><slot name="name" /></span>
        <span class="text-xl"><slot name="enName" /></span>
      </div>
      <div>
        <div><slot name="birthday" /></div>
        <div class="font-bold"><slot name="skill" /></div>
        <div><slot name="sortInfo" /></div>
      </div>
      <hr class="border-black" />
      <div><slot name="info" /></div>
      <div>
        <div><slot name="place" /></div>
        <div>
          <a :href="'mailto:' + email" class="text-blue-500" > <slot name="mail" /> </a> | <slot name="phone" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
