<template>
  <nav
    class="w-full py-2 md:py-3 px-3 md:px-6 flex items-center justify-start relative text-white scroll-smooth mx-3 md:mx-0 mt-3 md:mt-0 md:bg-inherit"
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
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm md:text-base hover:text-[#cce9ff] transition-colors duration-300"
        >
          {{ link.label }}
        </a>
      </div>
    </div>

    <!-- Mobile Menu Button -->
    <button
      @click="mobileMenuOpen = !mobileMenuOpen"
      aria-label="Open menu"
      class="md:hidden absolute left-10 top-1/2 mt-2 -translate-y-1/2 z-50 flex flex-col gap-1 justify-center w-8 h-8"
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
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 md:hidden z-40 flex items-start justify-center"
      >
        <!-- صندوق اللينكات مع blur -->
        <div
          class="relative h-[345px] z-50 mt-5 mx-4 w-full max-w-sm rounded-2xl py-4 px-4 bg-black/30 backdrop-blur-lg shadow-lg flex flex-col items-start gap-1 menu-blur"
        >
          <img
            src="/icons/FooterIcons/MostadamIcon.svg"
            alt="Logo"
            class="w-20 md:w-[185px] h-auto md:h-[68px] mb-4"
          />
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="w-[298px] h-[45px] flex items-center justify-start px-3 py-2 rounded-[12px] opacity-100 hover:bg-white/10 transition-colors text-sm text-white"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const mobileMenuOpen = ref(false);

// مصفوفة اللينكات
const links = [
  { label: "عن البرنامج", href: "#about" },
  { label: "لماذا مستدام", href: "#why" },
  { label: "ما نقدمه", href: "#program" },
  { label: "إنجازاتنا", href: "#achievements" },
  { label: "مراحل البرنامج", href: "#programLevels" },
  { label: "الأثر المتوقع", href: "#expectedImpact" },
  { label: "اتصل بنا", href: "#contact" },
];
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.menu-blur {
  backdrop-filter: blur(10px);
  will-change: backdrop-filter;
}

html {
  scroll-behavior: smooth;
}
</style>
