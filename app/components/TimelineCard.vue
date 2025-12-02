<template>
  <div
    class="h-[121px] rounded-[24px] p-[24px] bg-[#F9F9F9] shadow-[0_35px_116px_-10px_rgba(154,167,193,0.25)]"
  >
    <!-- Icon + Title -->
    <div class="flex items-center gap-4 mb-4">
      <div
        class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
      >
        <img
          :src="`/icons/ProgramLevelsIcons/${icon}`"
          alt="Icon"
          class="w-36 h-32 object-contain"
        />
      </div>
      <div>
        <h4 class="font-custum-SemiBold text-[24px] text-[#233A69]">
          {{ title }}
        </h4>
        <!-- Description -->
        <p class="font-custum-Regular text-[12px] text-[#233A69]">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: Object,
  title: String,
  description: String,
});
</script>
