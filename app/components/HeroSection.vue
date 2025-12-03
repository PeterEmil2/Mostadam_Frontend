<template>
  <section
    class="hero w-full min-h-screen md:min-h-[708px] pt-0 mt-0 bg-[linear-gradient(101.78deg,_#77BABB_7.12%,_#6EACB2_18.54%,_#67A1AA_29.52%,_#5A8E9E_39.63%,_#4F7C93_49.3%,_#538296_58.96%,_#4C778F_69.07%,_#436A87_77.86%,_#3F6383_86.65%,_#2A446F_95.87%)]"
  >
    <AppNav class="scroll-smooth z-100" />

    <div
      class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-3 sm:px-4 md:px-6 py-6 sm:py-10 md:py-12 z-5"
    >
      <!-- Hero Image -->
      <div
        class="hero-image flex-1 relative flex justify-center md:justify-end w-full md:w-auto z-0"
      >
        <img
          src="/icons/HeroIcons/Stare.png"
          class="absolute left-0 sm:left-0 md:left-[-43px] top-[-10px] w-8 sm:w-10 md:w-[54px] h-8 sm:h-10 md:h-[55px] z-10"
        />
        <img
          src="/images/Img hero.png"
          alt="hero"
          class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto z-0"
        />
        <img
          src="/icons/HeroIcons/tenderIcon.png"
          class="absolute bottom-0 right-0 -translate-y-1/2 w-20 sm:w-28 md:w-[120px] lg:w-[148px] h-auto"
        />
      </div>

      <!-- Hero Content -->
      <div class="hero-content flex-1 l md:w-auto text-center">
        <h3
          class="text-white mb-3 sm:mb-4 text-[18px] sm:text-[18px] md:text-[40px] font-custum-Bold leading-tight"
        >
          مستدام.. عطاء يدوم وأثر يستمر..
        </h3>
        <h4
          class="text-white mb-4 sm:mb-6 font-custum-Medium text-[16px] sm:text-base md:text-[25px] text-center md:text-right "
        >
          استثمار اجتماعي يصنع مستقبل الجمعيات الأهلية.. <br />
          عبر مبادرة تعزز استدامة عطاء الجمعيات الاهلية.. عبر مبادرة تعزز
          استدامة عطاء الجمعيات الاهلية عبر وحدات استثمار اجتماعي مبتكرة
        </h4>

        <div class="buttons flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
          <button
            class="bg-[#233A69] text-white font-semibold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-lg text-sm sm:text-base hover:opacity-90 transition-opacity"
          >
            استبيان تسجيل الاهتمام
          </button>
          <button
            class="bg-white border border-[#233A69] text-[#233A69] font-semibold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-lg text-sm sm:text-base hover:bg-gray-100 transition-colors"
          >
            استبيان التسجيل للالتحاق
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
