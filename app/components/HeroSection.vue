<template>
  <section class="hero pt-0 mt-0 bg-gradient-to-r from-[#4A7A92] to-[#3B607A]">
    <AppNav />
    <div
      class="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-6 pt-32"
    >
      <div class="hero-image flex-1">
        <img
          src="/images/profile-pic.png"
          alt="hero"
          class="w-full max-w-lg mx-auto"
        />
      </div>

      <div class="hero-content flex-1 text-right">
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">
          مستدام.. عطاء يدوم وأثر يستمر..
        </h1>

        <p class="text-white mb-6 font-bold text-lg md:text-xl">
          استثمار اجتماعي يصنع مستقبل الجمعيات الأهلية.. عبر مبادرة تعزز استدامة
          عطاء الجمعيات الاهلية.. عبر مبادرة تعزز استدامة عطاء الجمعيات الاهلية
          عبر وحدات استثمار اجتماعي مبتكرة
        </p>

        <div class="buttons flex flex-col sm:flex-row gap-4">
          <button
            class="bg-[#A52A2A] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#8B1C1C] transition"
          >
            استبيان تسجيل الاهتمام
          </button>
          <button
            class="bg-white border border-[#A52A2A] text-[#A52A2A] font-semibold py-3 px-6 rounded-lg hover:bg-[#A52A2A] hover:text-white transition"
          >
            استبيان التسجيل للالتحاق
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
