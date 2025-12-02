<script setup>
defineProps({
  number: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    class="flex flex-col items-center justify-center text-center bg-[#ECF0F9] w-[357px] h-[193px] rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
  >
    <div class="mb-4">
      <img :src="icon" alt="icon" class="w-16 h-16 object-contain" />
    </div>

    <h3 class="text-[20px] font-custum-Medium mb-2 dir-ltr">
      {{ number }}
    </h3>

    <p class="text-[20px] font-custum-Medium leading-snug">
      {{ title }}
    </p>
  </div>
</template>

<style scoped>
.dir-ltr {
  direction: ltr;
  unicode-bidi: embed;
}
</style>
