<template>
  <div id="programLevels" class="min-h-screen bg-gradient-to-br p-8" dir="rtl">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="flex flex-col items-center mb-10">
        <h1 class="font-custum-Bold text-[40px] mb-2">مراحل البرنامج</h1>
        <img
          class="w-[142px] h-[24px]"
          src="/icons/AboutProgram/Frame@2x.png"
          alt=""
        />
      </div>

      <!-- Desktop Stages -->
      <div class="hidden md:block relative z-10">
        <div
          v-for="(stage, index) in stages"
          :key="index"
          class="relative flex items-center gap-45 odd:flex-row even:flex-row-reverse py-13"
          :class="{
            'after:content-[\'\'] after:-z-10 after:absolute after:bottom-0 after:w-[300px] after:h-[2px]  after:-translate-y-1/2 after:bg-[repeating-linear-gradient(to_right,#b9b9b9_0_10px,transparent_40px_50px)]':
              index !== stages.length - 1,
            'odd:after:right-4/10 odd:after:rotate-[38deg]':
              index !== stages.length - 1,
            'even:after:left-4/10 even:after:rotate-[-38deg] p-13':
              index !== stages.length - 1,
          }"
        >
          <!-- Level Text -->
          <div class="relative">
            <h3
              class="font-medium text-[52px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 w-full"
              style="
                background: linear-gradient(
                  101.78deg,
                  #77babb 7.12%,
                  #6eacb2 18.54%,
                  #67a1aa 29.52%,
                  #5a8e9e 39.63%,
                  #4f7c93 49.3%,
                  #538296 58.96%,
                  #4c778f 69.07%,
                  #436a87 77.86%,
                  #3f6383 86.65%,
                  #2a446f 95.87%
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                color: transparent;
              "
            >
              {{ stage.level }}
            </h3>
          </div>

          <!-- Stage Card -->
          <div class="w-5/12">
            <TimelineCard
              :icon="stage.icon"
              :title="stage.title"
              :description="stage.description"
            />
          </div>
        </div>
      </div>

      <!-- Mobile Stages -->
      <div class="md:hidden relative flex flex-col items-center">
        <div
          class="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full border-l-2 border-dashed border-gray-300"
        ></div>

        <div
          v-for="(stage, index) in stages"
          :key="index"
          class="relative flex flex-col items-center gap-4 mb-8 last:mb-0"
        >
          <TimelineCard
            class="w-[357px] h-[193px]"
            :icon="stage.icon"
            :title="stage.title"
            :description="stage.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stages = [
  {
    level: "المرحلة الأولى",
    title: "الاستقطاب",
    description: "جذب الشباب الموهوباختيار الجمعيات المؤهلة.",
    icon: "Group-5.svg",
    side: "left",
  },
  {
    level: "المرحلة الثانية",
    title: "التحليل والتهيئة و الاعداد",
    description:
      "تحليل جاهزية الجمعيات وفق المسارات الثلاثة، والإعداد للتقديم على منح صندوق دعم الجمعيات",
    icon: "Group.svg",
    side: "right",
  },
  {
    level: "المرحلة الثالثة",
    title: "المأسسة",
    description: "تأسيس وحدة استثمار اجتماعي.",
    icon: "Group-1.svg",
    side: "left",
  },
  {
    level: "المرحلة الرابعة",
    title: "الإنضاج",
    description: "ابتكار المنتج/الخدمة وتجربتها.",
    icon: "Group-2.svg",
    side: "right",
  },
  {
    level: "المرحلة الخامسة",
    title: "النفاذ للسوق",
    description: "دعم النمو وربط المنتج بالممولين والشركاء.",
    icon: "Group-4.svg",
    side: "left",
  },
  {
    level: "المرحلة السادسة",
    title: "ما بعد النفاذ",
    description: "متابعة الاستدامة وتعزيز الأثر.",
    icon: "Group-3.svg",
    side: "right",
  },
];
</script>
