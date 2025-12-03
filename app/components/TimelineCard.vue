<template>
  <div
    class="rounded-[24px] p-4 sm:p-6 md:p-6 bg-[#F9F9F9] shadow-[0_35px_116px_-10px_rgba(154,167,193,0.25)] max-w-[357px] sm:max-w-[357px] md:max-w-[357px] h-auto sm:h-[121px] flex flex-row sm:flex-row items-start sm:items-center"
  >
    <!-- Icon -->
    <div
      class="w-12 h-12 sm:w-12 sm:h-12 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0 mb-2 sm:mb-0"
    >
      <img
        :src="`/icons/ProgramLevelsIcons/${icon}`"
        alt="Icon"
        class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
      />
    </div>

    <!-- Title & Description -->
    <div class="flex-1 sm:ml-4">
      <h4
        class="font-custum-SemiBold md:text-[24px] text-[#233A69] whitespace-nowrap"
      >
        {{ title }}
      </h4>
      <p
        class="font-custum-Regular text-[10px] sm:text-[12px] md:text-[12px] text-[#233A69] mt-1 sm:mt-0"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
});
</script>
