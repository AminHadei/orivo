<script setup lang="ts">
import ArticleCard from "@/components/base/ArticleCard.vue";
import BackdropShape from "@/components/base/BackdropShape.vue";
import HairlineGrid from "@/components/base/HairlineGrid.vue";
import SectionHeader from "@/components/base/SectionHeader.vue";

const practices = [
  {
    eyebrow: "حاکمیت داده",
    title: "مالکیت، کیفیت و دسترسی به داده",
    description:
      "تعیین مالک هر داده کلیدی، قواعد کیفیت و سطوح دسترسی؛ حاکمیتی به‌اندازه، نه بروکراسی تازه.",
  },
  {
    eyebrow: "توانمندسازی تیم",
    title: "انتقال دانش به تیم داخلی",
    description:
      "هر پروژه با آموزش و مستندسازی همراه است تا سازمان پس از پایان همکاری، وابسته به مشاور نماند.",
  },
  {
    eyebrow: "سنجش اثر",
    title: "از سنجه فناورانه تا اثر مالی",
    description:
      "پیش از شروع، سنجه‌های اثر تعریف می‌شوند: زمان چرخه فرایند، خطای انسانی، هزینه عملیات و بازگشت سرمایه.",
  },
];
</script>

<template>
  <section class="section-block relative isolate">
    <BackdropShape
      variant="mint"
      size="var(--section-disc-size)"
      start="var(--section-disc-start)"
      top="var(--section-disc-top)"
    />

    <SectionHeader
      title="مدیریت تحول"
      subtitle="درس‌هایی از فرایند، حاکمیت و پذیرش سازمانی"
    />

    <HairlineGrid :cols="3">
      <ArticleCard
        v-for="practice in practices"
        :key="practice.title"
        :eyebrow="practice.eyebrow"
        :title="practice.title"
        :description="practice.description"
      />
    </HairlineGrid>
  </section>
</template>
