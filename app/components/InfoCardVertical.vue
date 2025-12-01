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
    class="flex flex-col items-center justify-center text-center bg-[#dbeceb] rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
  >
    <div class="mb-4">
      <img :src="icon" alt="icon" class="w-16 h-16 object-contain" />
    </div>

    <h3 class="text-3xl font-bold text-[#385b73] mb-2 font-sans dir-ltr">
      {{ number }}
    </h3>

    <p class="text-[#385b73] font-semibold text-lg leading-snug">
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
