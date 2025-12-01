<template>
  <div class="min-h-screen bg-gradient-to-br p-8" dir="rtl">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-800 mb-2">مراحل البرنامج</h1>
        <div class="w-24 h-1 bg-cyan-400 mx-auto"></div>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Zigzag center line -->
        <svg
          class="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none"
          style="height: 1200px; width: 64px; z-index: 0"
          preserveAspectRatio="none"
        >
          <path
            d=" M32 0 L0 342 L64 684 L0 1026 L64 1368 L0 1710 L64 2052 "
            stroke="#cbd5e1"
            stroke-width="4"
            stroke-dasharray="12,12"
            fill="none"
            vector-effect="non-scaling-stroke"
          />
        </svg>
        <!-- Stages -->
        <div class="space-y-24 relative z-10">
          <div
            v-for="(stage, index) in stages"
            :key="index"
            class="relative flex items-center gap-60 odd:flex-row even:flex-row-reverse [&>div>h3]:even:text-red-500"
          >
            <!-- Level Text -->
            <div
              class="w-4/12"
              :class="stage.side === 'right' ? 'text-left' : 'text-right'"
            >
              <h3
                class="h-[85px] font-medium text-[52px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 w-full"
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
