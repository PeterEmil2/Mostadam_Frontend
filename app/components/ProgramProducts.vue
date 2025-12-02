<template>
  <section id="program" class="py-20 bg-#FFFFFF pt-[48px]">
    <div class="container mx-auto px-6">
      <div class="title-icon flex flex-col items-center mb-10">
        <h2 class="font-custum-Bold text-[40px] text-center">
          ما الذي يقدمه البرنامج؟
        </h2>
        <img
          class="w-[142px] h-[24px]"
          src="/icons/AboutProgram/Frame@2x.png"
          alt=""
        />
      </div>

      <div class="flex flex-wrap justify-center gap-8">
        <InfoCardHorizontal
          title="تمكين الجمعيات"
          description="تأسيس وحدات استثمار اجتماعي داخل الجمعيات."
          icon="/icons/ProgramProducts/dealIcon.png"
          variant="notdefault"
        />
        <InfoCardHorizontal
          title="بناء القدرات"
          description="تطوير مهارات الجمعيات لتصميم نماذج مالية مبتكرة."
          icon="/icons/ProgramProducts/hatIcon.png"
          variant="notdefault"
        />
        <InfoCardHorizontal
          title="أثر ملموس"
          description="دخل ذاتي مستدام وقيمة اجتماعية طويلة المدى."
          icon="/icons/ProgramProducts/wayIcon.png"
          variant="notdefault"
        />
        <InfoCardHorizontal
          title="مسار متكامل"
          description="من التحليل والتأسيس، مروراً بالتطوير، وصولاً لتنفيذ السوق وما بعده."
          icon="/icons/ProgramProducts/statIcon.png"
          variant="notdefault"
        />
      </div>
    </div>
  </section>
</template>
