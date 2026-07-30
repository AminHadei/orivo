<script setup lang="ts">
import ArticleCard from "@/components/base/ArticleCard.vue";
import BackdropShape from "@/components/base/BackdropShape.vue";
import HairlineGrid from "@/components/base/HairlineGrid.vue";
import SectionHeader from "@/components/base/SectionHeader.vue";

const services = [
  {
    eyebrow: "تدوین استراتژی",
    title: "نقشه راه هوشمندسازی",
    description:
      "از وضعیت موجود تا افق سه‌ساله: اولویت‌بندی حوزه‌ها، انتخاب نبردهای اول، برآورد منابع و تعریف سنجه‌های موفقیت.",
    meta: "۴ تا ۶ هفته",
  },
  {
    eyebrow: "اجرا در فرایند",
    title: "بازطراحی و خودکارسازی فرایند",
    description:
      "فرایندهای کلیدی را با تیم شما بازطراحی می‌کنیم و نقاط قابل خودکارسازی را با ابزارهای موجود سازمان پیاده می‌کنیم.",
    meta: "پروژه‌ای یا مستمر",
  },
  {
    eyebrow: "سامانه تصمیم",
    title: "استقرار سامانه‌های تصمیم‌یار",
    description:
      "داشبورد، هشدار و مدل‌های پیش‌بین در نقاط تصمیم مدیران؛ با معماری داده‌ای که پس از پروژه هم قابل نگهداشت است.",
    meta: "همراهی تا استقرار",
  },
];
</script>

<template>
  <section id="services" class="section-block scroll-anchor relative isolate">
    <BackdropShape
      variant="citrus"
      size="var(--section-disc-size)"
      start="var(--section-disc-start)"
      top="var(--section-disc-top)"
    />

    <SectionHeader title="خدمات مشاوره" subtitle="سه سطح همکاری با اوریوو" />

    <HairlineGrid :cols="3">
      <ArticleCard
        v-for="service in services"
        :key="service.title"
        :eyebrow="service.eyebrow"
        :title="service.title"
        :description="service.description"
        :meta="service.meta"
      />
    </HairlineGrid>
  </section>
</template>
