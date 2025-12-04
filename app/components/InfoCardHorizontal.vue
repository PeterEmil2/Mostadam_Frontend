<template>
  <div
    class="flex items-start gap-4 bg-[#9FB4DF40] w-[343px] h-[86px] md:w-[597px] md:h-[140px] rounded-2xl pt-[10px] md:pt-[25px] pl-[16px] pr-[16px] transition-transform duration-300 ease-in-out hover:scale-105"
    :class="[
      variant === 'default'
        ? 'bg-white shadow-lg shadow-blue-900/10'
        : 'bg-[#EBF2F8] hover:bg-blue-50',
    ]"
  >
    <img
      :src="icon"
      alt="icon"
      class="md:w-[61.83px] md:h-[61.83px] w-[49px] h-[49px] mt-[5px]"
    />

    <div class="flex flex-col items-start">
      <h3
        class="mb-2 text-[18px] md:text-[24px] font-bold text-gray-900 font-custum-Medium"
      >
        {{ title }}
      </h3>
      <p
        class="text-[12px] md:text-[18px] leading-relaxed font-custum-Regular text-right"
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
