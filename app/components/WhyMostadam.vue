<template>
  <section
    id="why"
    class="py-20 bg-gradient-to-r from-[#4A7A92] to-[#3B607A] overflow-hidden"
  >
    <div class="text-center mb-16 relative z-10">
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">
        لماذا مستدام؟
      </h1>
      <div class="h-1 w-24 bg-teal-400 mx-auto rounded-full"></div>
    </div>

    <div
      class="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10"
    >
      <div class="flex-1 w-full flex flex-col gap-6 relative z-10">
        <InfoCardHorizontal
          title="الواقع"
          description="70% من الجمعيات تعتمد على تبرعات غير منتظمة."
          icon="/images/profile-pic.png"
          variant="default"
          class="md:w-4/5 self-end"
        />

        <InfoCardHorizontal
          title="النتيجة"
          description="ضعف الاستدامة وتذبذب البرامج."
          icon="/images/profile-pic.png"
          variant="default"
          class="md:w-4/5 md:mr-12 self-start"
        />

        <InfoCardHorizontal
          title="الحل"
          description="تأسيس وحدات استثمار اجتماعي داخل الجمعيات."
          icon="/images/profile-pic.png"
          variant="default"
          class="md:w-4/5 self-end"
        />

        <InfoCardHorizontal
          title="الأثر"
          description="منتجات وخدمات تبيع وتحقق أثراً مستداماً."
          icon="/images/profile-pic.png"
          variant="default"
          class="md:w-4/5 md:mr-12 self-start"
        />
      </div>

      <div class="flex-1 flex justify-center items-center relative">
        <div
          class="absolute w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl -z-10"
        ></div>

        <img
          src="/images/video5.jpeg"
          alt="Why Sustainable"
          class="w-full max-w-md mx-auto object-contain rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  </section>
</template>
