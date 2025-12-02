<template>
  <section
    id="achievements"
    class="bg-white bg-gradient-to-r from-[#4A7A92] to-[#3B607A] pb-10"
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
    <!-- باقي الكود هنا -->
    >

    <div class="container mx-auto px-6">
      <div class="title-icon flex flex-col items-center">
        <h1 class="text-center mt-10 font-custum-Bold text-[40px] text-white">
          الاثر المتوقع
        </h1>
        <img
          class="w-[142px] h-[24px]"
          src="/icons/AboutProgram/Frame@2x.png"
          alt=""
        />
      </div>

      <div class="flex justify-center items-center pt-5">
        <p
          class="w-[571px] h-[104px] text-center font-custum-Regular font-normal text-[#FFFFFF]"
        >
          بعد 18 شهراً من إطلاق البرنامج..
          <br />
          تمكين 120 جمعية أهلية من تأسيس وحدات استثمار اجتماعي مستدامة، تقود
          الأثر التنموي وتحوّل الجمعيات من الاعتماد على التبرعات إلى نماذج مالية
          أكثر استقراراً.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-6">
        <div
          v-for="item in [
            {
              id: 1,
              title: 'خفض الاعتماد على التبرعات الموسمية',
              icon: '/icons/ExpectedImpactIcons/Frame 1984077894-1.svg',
            },
            {
              id: 2,
              title: 'تنويع مصادر الدخل عبر استثمارات مبتكرة',
              icon: '/icons/ExpectedImpactIcons/Frame 1984077894.svg',
            },
            {
              id: 3,
              title: 'تعزيز الاستقلال المالي والاستمرارية',
              icon: '/icons/ExpectedImpactIcons/Buttons.svg',
            },
            {
              id: 4,
              title: 'تقديم منتجات وخدمات مجتمعية مستدامة',
              icon: '/icons/ExpectedImpactIcons/Buttons-1.svg',
            },
            {
              id: 5,
              title: 'بناء قطاع غير ربحي أقوى وأكثر فاعلية',
              icon: '/icons/ExpectedImpactIcons/Frame 1984077894-2.svg',
            },
          ]"
          :key="item.id"
          class="m-2"
        >
          <InfoCardVertical :title="item.title" :icon="item.icon" />
        </div>
      </div>
    </div>
  </section>
</template>
