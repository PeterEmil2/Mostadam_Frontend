<template>
  <section
    id="achievements"
    class="py-8 md:py-10 overflow-hidden h-auto md:h-[761px]"
    style="
      background: linear-gradient(
        101.78deg,
        #5c80bb 16.52%,
        #5a7db8 26.45%,
        #5678b2 36.99%,
        #4a6aa1 48.86%,
        #47669d 58.96%,
        #395487 69.07%,
        #365082 74.78%,
        #2e4778 83.33%,
        #233968 91.88%
      );
    "
  >
    <div class="text-center relative z-10">
      <h1 class="text-[18px] md:text-[40px] font-bold text-white font-custum-Bold">
        أنجازاتنا
      </h1>

      <div class="relative mb-6 md:mb-10">
        <img
          src="/icons/WhyMostadamIcons/Frame.svg"
          alt="Why Mostadam"
          class="md:h-[24px] md:w-[172px] w-[86px] h-[12px] mx-auto pointer-events-none"
        />
      </div>

      <div class="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
        <div
          v-for="item in [
            {
              id: 1,
              number: '13',
              title: 'شركة غير ربحية أنشئت',
              icon: '/icons/AchievementIcons/Frame 1984077894-2.svg',
            },
            {
              id: 2,
              number: '25',
              title: 'وحدة استثمار اجتماعي تأسست',
              icon: '/icons/AchievementIcons/Frame 1984077894-1.svg',
            },
            {
              id: 3,
              number: '652',
              title: 'جمعية مسجلة من 13 منطقة',
              icon: '/icons/AchievementIcons/Frame 1984077894.svg',
            },
          ]"
          :key="item.id"
          class="flex justify-center"
        >
          <InfoCardVertical :title="item.title" :icon="item.icon" />
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-4 md:gap-6">
        <div
          v-for="item in [
            {
              id: 4,
              number: '3.57x',
              title: 'عائد مالي مضاعف على كل ريال',
              icon: '/icons/AchievementIcons/Buttons.svg',
            },
            {
              id: 5,
              number: '+23400',
              title: 'ريال إيرادات المشاريع',
              icon: '/icons/AchievementIcons/Frame 1984077894-3.svg',
            },
          ]"
          :key="item.id"
          class="flex justify-center"
        >
          <InfoCardVertical :title="item.title" :icon="item.icon" />
        </div>
      </div>
    </div>
  </section>
</template>
