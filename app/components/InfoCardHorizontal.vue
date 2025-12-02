<template>
  <div
    class="flex items-start gap-4 bg-[#9FB4DF40] w-[597px] h-[140px] rounded-2xl pt-[30px] pb-[30px] pl-[16px] pr-[16px] transition-transform duration-300 ease-in-out hover:scale-105"
    :class="[
      variant === 'default'
        ? 'bg-white shadow-lg shadow-blue-900/10'
        : 'bg-[#EBF2F8] hover:bg-blue-50',
    ]"
  >
    <img class="w-[80px] h-[80px]" :src="icon" alt="icon" />

    <div class="flex-1">
      <h3 class="mb-2 font-custum-Bold text-[24px]">
        {{ title }}
      </h3>
      <p class="leading-relaxed font-custum-Regular">
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
