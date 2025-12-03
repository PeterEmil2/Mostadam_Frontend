<template>
  <nav
    class="w-full py-2 md:py-3 px-3 md:px-6 flex items-center justify-start relative bg-white/10 backdrop-blur-md rounded-full md:rounded-none text-white scroll-smooth mx-3 md:mx-0 mt-3 md:mt-0 md:bg-inherit"
    dir="rtl"
  >
    <div class="flex items-center gap-4">
      <!-- Logo -->
      <img
        src="/icons/FooterIcons/MostadamIcon.svg"
        alt="Logo"
        class="w-20 md:w-[185px] h-auto md:h-[68px] object-contain"
      />

    
    </div>

    <!-- Mobile Menu Button -->
    <button
      @click="mobileMenuOpen = !mobileMenuOpen"
      aria-label="Open menu"
      class="md:hidden absolute left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1 justify-center w-8 h-8"
    >
      <span
        class="w-6 h-0.5 bg-white transition-transform duration-300"
        :class="mobileMenuOpen ? 'rotate-45 translate-y-2' : ''"
      </span>
    </button>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div v-if="mobileMenuOpen" class="fixed inset-0 md:hidden z-40">
        <div class="absolute inset-0 bg-black/30 backdrop-blur-md z-40" @click="mobileMenuOpen = false"></div>

        <div class="absolute inset-x-4 top-12 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-4 md:p-6 pointer-events-auto z-50">
          <button @click="mobileMenuOpen = false" aria-label="Close menu" class="absolute left-4 top-4 text-white p-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <img src="/icons/FooterIcons/MostadamIcon.svg" alt="Mostadam" class="absolute right-4 top-4 w-24" />

          <div class="mt-6">
            <div class="bg-black/25 backdrop-blur-sm rounded-xl p-3 space-y-3 text-right">
              <a href="#about" class="block text-white text-base" @click="mobileMenuOpen = false">عن البرنامج</a>
              <a href="#why" class="block text-white text-base" @click="mobileMenuOpen = false">لماذا مستدام</a>
              <a href="#program" class="block text-white text-base" @click="mobileMenuOpen = false">ما نقدمه</a>
              <a href="#achievements" class="block text-white text-base" @click="mobileMenuOpen = false">انجازاتنا</a>
              <a href="#programLevels" class="block text-white text-base" @click="mobileMenuOpen = false">مراحل البرنامج</a>
              <a href="#expectedImpact" class="block text-white text-base" @click="mobileMenuOpen = false">الأثر المتوقع</a>
              <a href="#contact" class="block text-white text-base" @click="mobileMenuOpen = false">اتصل بنا</a>
            </div>

            <p class="text-white text-sm md:text-base mt-4">مستدام.. عطاء يدوم وأثر يستمر..</p>
            <p class="text-white/80 text-xs md:text-sm mt-2">استثمار اجتماعي يصنع مستقبل الجمعيات الأهلية.. عبر مبادرة تعزز استدامة عطاء الجمعيات الاهلية عبر وحدات استثمار اجتماعي مبتكرة</p>

            <div class="mt-4 flex flex-col gap-3">
              <button class="w-full bg-[#233A69] text-white py-2 rounded-lg">استبيان تسجيل الاهتمام</button>
              <button class="w-full bg-white text-[#233A69] py-2 rounded-lg">استبيان التسجيل للالتحاق</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const mobileMenuOpen = ref(false);
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
