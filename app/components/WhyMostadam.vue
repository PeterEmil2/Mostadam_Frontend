<template>
  <section
    id="why"
    class="py-10 overflow-hidden h-[805px]"
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
    <div class="text-center mb-5 relative z-10">
      <h1 class="text-[40px] font-bold text-white mb-2 font-custum-Bold">
        لماذا مستدام؟
      </h1>
      <!-- الصورة تحت الخط -->
      <div class="relative mb-5">
        <img
          src="/icons/WhyMostadamIcons/Frame.svg"
          alt="Why Mostadam"
          class="w-[172px] h-[24px] mx-auto pointer-events-none"
        />
      </div>

      <div
        class="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10"
      >
        <div class="flex-1 w-full flex flex-col gap-6 z-0">
          <img
            src="/images/WhyMostadam.svg"
            alt="Why Mostadam"
            class="absolute w-[908px] h-[720px] z-10 pointer-events-none pb-10"
          />
          <InfoCardHorizontal
            title="الواقع"
            description="70% من الجمعيات تعتمد على تبرعات غير منتظمة."
            icon="/icons/WhyMostadamIcons/Group.svg"
            variant="default"
            class="self-end h-32 w-[503.83px]"
          />

          <InfoCardHorizontal
            title="النتيجة"
            description="ضعف الاستدامة وتذبذب البرامج."
            icon="/icons/WhyMostadamIcons/Group-1.svg"
            variant="default"
            class="md:mr-12 self-start h-32 w-[503.83px]"
          />

          <InfoCardHorizontal
            title="الحل"
            description="تأسيس وحدات استثمار اجتماعي داخل الجمعيات."
            icon="/icons/WhyMostadamIcons/Group-2.svg"
            variant="default"
            class="self-end h-32 w-[503.83px]"
          />

          <InfoCardHorizontal
            title="الأثر"
            description="منتجات وخدمات تبيع وتحقق أثراً مستداماً."
            icon="/icons/WhyMostadamIcons/Group-3.svg"
            variant="default"
            class="md:mr-12 self-start h-32 w-[503.83px]"
          />
        </div>

        <div class="flex-1 flex justify-center items-center relative">
          <div
            class="absolute w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl -z-10"
          ></div>

          <img src="/images/Img.svg" alt="Why Sustainable" class="" />
        </div>
      </div>
    </div>
  </section>
</template>
