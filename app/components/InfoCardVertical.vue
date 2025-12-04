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
    class="flex flex-col items-center justify-center text-center bg-[#ECF0F9] md:w-[357px] md:h-[193px] w-[318px] h-[102px] rounded-xl md:p-8 p-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
  >
    <div class="md:mb-4">
      <img :src="icon" alt="icon" class="md:w-16 md:h-16 w-11 h-11 object-contain" />
    </div>

    <h3 class="text-[20px] font-custum-Medium mb-2 dir-ltr">
      {{ number }}
    </h3>

    <p class="md:text-[20px] text-[16px] font-custum-Medium">
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
