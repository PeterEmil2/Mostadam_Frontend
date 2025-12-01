<template>
  <div
    class="flex items-start gap-4 rounded-2xl p-6 transition-transform duration-300 ease-in-out hover:scale-105"
    :class="[
      variant === 'default'
        ? 'bg-white shadow-lg shadow-blue-900/10'
        : 'bg-[#EBF2F8] hover:bg-blue-50',
    ]"
  >
    <div
      class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600"
    >
      <span class="text-2xl"><img :src="icon" alt="icon" /></span>
    </div>

    <div class="flex-1">
      <h3 class="mb-2 text-lg font-bold text-gray-900">
        {{ title }}
      </h3>
      <p class="text-lg leading-relaxed text-gray-600">
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
