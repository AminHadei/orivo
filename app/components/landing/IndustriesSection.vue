<script setup lang="ts">
import ArticleCard from "@/components/base/ArticleCard.vue";
import CitrusMark from "@/components/base/CitrusMark.vue";
import HairlineGrid from "@/components/base/HairlineGrid.vue";
import SectionHeader from "@/components/base/SectionHeader.vue";

const industries = [
  {
    eyebrow: "تولید و صنعت",
    title: "از داده‌های خط تولید تا تصمیم نگهداشت",
    description:
      "جمع‌آوری داده از ماشین و انبار، پایش توقفات و برنامه نگهداشت پیش‌بینانه بر پایه الگوهای واقعی خرابی.",
  },
  {
    eyebrow: "خرده‌فروشی و زنجیره تامین",
    title: "پیش‌بینی تقاضا و برنامه‌ریزی موجودی",
    description:
      "یکپارچه‌سازی داده‌های فروش و تامین، پیش‌بینی تقاضا در سطح کالا-شعبه و قاعده‌مندکردن تصمیم‌های سفارش‌گذاری.",
  },
  {
    eyebrow: "خدمات مالی و بیمه",
    title: "خودکارسازی بررسی پرونده و ریسک",
    description:
      "استخراج داده از اسناد، امتیازدهی ریسک و مسیرهای تصمیم شفاف که هم سرعت را بالا می‌برد و هم قابل حسابرسی است.",
  },
];
</script>

<template>
  <section class="section-block relative overflow-x-clip overflow-y-visible">
    <CitrusMark />

    <div class="relative z-10">
      <SectionHeader title="تجربه‌های صنعتی" subtitle="الگوهای اجرا در صنایع مختلف" />

      <HairlineGrid :cols="3">
        <ArticleCard
          v-for="industry in industries"
          :key="industry.title"
          :eyebrow="industry.eyebrow"
          :title="industry.title"
          :description="industry.description"
        />
      </HairlineGrid>
    </div>
  </section>
</template>
