<template>
  <section dir="rtl" class="min-h-screen bg-[#F3F6FA] py-12 px-4 h-[930px]">
    <div class="mx-auto">
      <div class="text-center mb-10">
        <h2
          class="text-3xl font-extrabold text-gray-900 mb-2 font-custum-ExtraBold text-[40px]"
        >
          الأسئلة الشائعة
        </h2>
        <!-- الصورة تحت الخط -->
        <div class="relative mb-15">
          <img
            src="/icons/WhyMostadamIcons/Frame.svg"
            alt="Why Mostadam"
            class="w-[172px] h-[24px] mx-auto pointer-events-none"
          />
        </div>
      </div>

      <div class="space-y-4">
        <div
          v-for="item in faqItems"
          :key="item.id"
          class="bg-white rounded-2xl shadow-sm overflow-hidden"
        >
          <!-- button: type button + aria for accessibility + keyboard support -->
          <button
            type="button"
            @click="onToggle(item.id)"
            @keyup.enter="onToggle(item.id)"
            @keyup.space.prevent="onToggle(item.id)"
            class="w-full text-right p-5 font-bold text-lg text-gray-800 hover:bg-gray-50 transition-colors flex justify-between items-center z-10"
          >
            <span class="font-custum-SemiBold text-[24px]">{{
              item.question
            }}</span>

            <svg
              v-if="activeId === item.id"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-[#7DD3D3] ml-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15"
              />
            </svg>

            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-gray-400 ml-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>

          <transition name="fade">
            <div
              v-if="activeId === item.id"
              class="px-5 pb-5 pt-0 text-gray-600 leading-relaxed font-custum-Medium text-[20px]"
            >
              <p class="pt-2 border-t border-gray-100 mt-2">
                {{ item.answer }}
              </p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Debug helper to ensure this script runs
console.log("[FaqAccordion] script setup running");

const activeId = ref<number | null>(null);

const onToggle = (id: number) => {
  console.log("[FaqAccordion] toggle clicked ->", id);
  activeId.value = activeId.value === id ? null : id;
  console.log("[FaqAccordion] activeId now ->", activeId.value);
};

// data
const faqItems = [
  { id: 1, question: "ما هو برنامج مستدام؟", answer: "برنامج مستدام..." },
  {
    id: 2,
    question: "ما الفائدة التي ستحصل عليها جمعيتي؟",
    answer: "ستحصل الجمعية...",
  },
  {
    id: 3,
    question: "هل يقدم البرنامج دعماً مالياً مباشراً؟",
    answer: "البرنامج يركز...",
  },
  {
    id: 4,
    question: "ما هي معايير الأهلية للتقديم؟",
    answer: "يجب أن تكون...",
  },
  { id: 5, question: "كم مدة البرنامج؟", answer: "عادة تكون..." },
  { id: 6, question: "هل المنظمات الصغيرة يمكنها التقديم؟", answer: "نعم..." },
];
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
