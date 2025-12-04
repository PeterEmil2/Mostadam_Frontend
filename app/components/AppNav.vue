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

      <!-- Desktop Menu -->
      <div
        class="hidden md:flex items-center gap-5 lg:gap-7 pr-4 lg:pr-8 font-custum-Medium"
      >
        <a
          href="#about"
          class="text-sm md:text-base hover:text-[#cce9ff] transition-colors duration-800"
        >
          عن البرنامج
        </a>
        <a
          href="#why"
          class="text-sm md:text-base hover:text-[#cce9ff] transition-colors duration-800"
        >
          لماذا مستدام
        </a>
        <a
          href="#program"
          class="text-sm md:text-base hover:text-[#cce9ff] transition-colors duration-300"
        >
          ما نقدمه
        </a>
        <a
          href="#achievements"
          class="text-sm md:text-base hover:text-[#cce9ff] transition-colors duration-300"
        >
          إنجازاتنا
        </a>
        <a
          href="#programLevels"
          class="text-sm md:text-base hover:text-[#cce9ff] transition-colors duration-300"
        >
          مراحل البرنامج
        </a>
        <a
          href="#expectedImpact"
          class="text-sm md:text-base hover:text-[#cce9ff] transition-colors duration-300"
        >
          الأثر المتوقع
        </a>
        <a
          href="#contact"
          class="text-sm md:text-base hover:text-[#cce9ff] transition-colors duration-300"
        >
          اتصل بنا
        </a>
      </div>
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
      ></span>
      <span
        class="w-6 h-0.5 bg-white transition-opacity duration-300"
        :class="mobileMenuOpen ? 'opacity-0' : ''"
      ></span>
      <span
        class="w-6 h-0.5 bg-white transition-transform duration-300"
        :class="mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''"
      ></span>
    </button>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div v-if="mobileMenuOpen" class="fixed inset-0 md:hidden z-40">
        <!-- Overlay خلف الـ page -->
        <div
          class="absolute inset-0 bg-black/30 backdrop-blur-sm"
          @click="mobileMenuOpen = false"
        ></div>

        <!-- Mobile Menu Links -->
        <div
          class="relative z-50 mt-16 mx-4 rounded-2xl py-4 px-4 bg-white/10 backdrop-blur-md space-y-3"
        >
          <a
            href="#about"
            class="block text-sm text-right hover:text-[#cce9ff]"
            @click="mobileMenuOpen = false"
          >
            عن البرنامج
          </a>
          <a
            href="#why"
            class="block text-sm text-right hover:text-[#cce9ff]"
            @click="mobileMenuOpen = false"
          >
            لماذا مستدام
          </a>
          <a
            href="#program"
            class="block text-sm text-right hover:text-[#cce9ff]"
            @click="mobileMenuOpen = false"
          >
            ما نقدمه
          </a>
          <a
            href="#achievements"
            class="block text-sm text-right hover:text-[#cce9ff]"
            @click="mobileMenuOpen = false"
          >
            إنجازاتنا
          </a>
          <a
            href="#programLevels"
            class="block text-sm text-right hover:text-[#cce9ff]"
            @click="mobileMenuOpen = false"
          >
            مراحل البرنامج
          </a>
          <a
            href="#expectedImpact"
            class="block text-sm text-right hover:text-[#cce9ff]"
            @click="mobileMenuOpen = false"
          >
            الأثر المتوقع
          </a>
          <a
            href="#contact"
            class="block text-sm text-right hover:text-[#cce9ff]"
            @click="mobileMenuOpen = false"
          >
            اتصل بنا
          </a>
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

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}
</style>
