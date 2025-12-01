<template>
  <section
    id="achievements"
    class="py-20 bg-white bg-gradient-to-r from-[#4A7A92] to-[#3B607A]"
  >
    <div class="container mx-auto px-6">
      <h2 class="text-2xl md:text-3xl font-bold text-white text-center mb-12">
        إنجازاتنا
      </h2>
      <div class="h-1 w-24 bg-teal-400 mx-auto rounded-full mb-16"></div>

      <div class="flex flex-wrap justify-center gap-6">
        <div
          v-for="item in [
            {
              id: 1,
              number: '13',
              title: 'شركة غير ربحية أنشئت',
              icon: '/images/profile-pic.png',
            },
            {
              id: 2,
              number: '25',
              title: 'وحدة استثمار اجتماعي تأسست',
              icon: '/images/profile-pic.png',
            },
            {
              id: 3,
              number: '652',
              title: 'جمعية مسجلة من 13 منطقة',
              icon: '/images/profile-pic.png',
            },
            {
              id: 4,
              number: '3.57x',
              title: 'عائد مالي مضاعف على كل ريال',
              icon: '/images/profile-pic.png',
            },
            {
              id: 5,
              number: '+23400',
              title: 'ريال إيرادات المشاريع',
              icon: '/images/profile-pic.png',
            },
          ]"
          :key="item.id"
          class="w-full md:w-[30%]"
        >
          <InfoCardVertical
            :number="item.number"
            :title="item.title"
            :icon="item.icon"
            class="h-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>
