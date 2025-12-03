<template>
  <section
    id="why"
    class="py-6 md:py-10 overflow-hidden h-auto md:h-[805px]"
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
    <div class="text-center mb-3 md:mb-5 relative z-10">
      <h1
        class="text-2xl md:text-4xl font-bold text-white mb-2 font-custum-Bold"
      >
        لماذا مستدام؟
      </h1>
      <div class="relative mb-3 md:mb-5">
        <img
          src="/icons/WhyMostadamIcons/Frame.svg"
          alt="Why Mostadam"
          class="w-[120px] md:w-[172px] h-4 md:h-6 mx-auto pointer-events-none"
        />
      </div>

      <div
        class="container mx-auto px-3 md:px-6 flex flex-col md:flex-row items-center gap-6 md:gap-10 relative z-20"
      >
        <div class="flex-1 w-full flex flex-col gap-4 md:gap-6 z-0">
          <div v-for="(card, index) in cards" :key="index">
            <InfoCardHorizontal
              :title="card.title"
              :description="card.description"
              :icon="card.icon"
              variant="default"
              :class="[
                'h-24 md:h-32 w-full md:w-[503.83px]',
                card.position === 'right' ? 'self-end' : 'self-start md:mr-12',
              ]"
            />
          </div>
        </div>

        <div class="flex-1 flex justify-center items-center relative">
          <div
            class="absolute w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl -z-10"
          ></div>

          <img src="/images/Img.svg" alt="Why Sustainable" class="" />
        </div>
      </div>

      <img
        src="/images/WhyMostadam.svg"
        alt="Why Mostadam"
        class="absolute top-1/2 right-0 -translate-y-1/2 w-[450px] md:w-[650px] lg:w-[908px] h-auto pointer-events-none z-10"
      />
    </div>
  </section>
</template>
<script setup>
const cards = [
  {
    title: "الواقع",
    description: "70% من الجمعيات تعتمد على تبرعات غير منتظمة.",
    icon: "/icons/WhyMostadamIcons/Group.svg",
    position: "right",
  },
  {
    title: "النتيجة",
    description: "ضعف الاستدامة وتذبذب البرامج.",
    icon: "/icons/WhyMostadamIcons/Group-1.svg",
    position: "left",
  },
  {
    title: "الحل",
    description: "تأسيس وحدات استثمار اجتماعي داخل الجمعيات.",
    icon: "/icons/WhyMostadamIcons/Group-2.svg",
    position: "right",
  },
  {
    title: "الأثر",
    description: "منتجات وخدمات تبيع وتحقق أثراً مستداماً.",
    icon: "/icons/WhyMostadamIcons/Group-3.svg",
    position: "left",
  },
];
</script>
