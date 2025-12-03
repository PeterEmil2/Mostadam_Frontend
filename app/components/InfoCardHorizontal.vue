<template>
  <div
    class="flex items-start gap-4 bg-[#9FB4DF40] w-[597px] h-[140px] rounded-2xl pt-[30px] pb-[30px] pl-[16px] pr-[16px] transition-transform duration-300 ease-in-out hover:scale-105"
    :class="[
      variant === 'default'
        ? 'bg-white shadow-lg shadow-blue-900/10'
        : 'bg-[#EBF2F8] hover:bg-blue-50',
    ]"
  >
    <img :src="icon" alt="icon" class="w-[61.83px] h-[61.83px]" />

    <div class="flex flex-col items-start">
      <h3 class="mb-2 text-[24px] font-bold text-gray-900 font-custum-Medium">
        {{ title }}
      </h3>
      <p
        class="text-[18px] leading-relaxed text-gray-600 font-custum-Regular text-right"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  icon: String,
  variant: {
    type: String,
    default: "default",
  },
});
</script>
