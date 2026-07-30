<script setup lang="ts">
import HairlineGrid from "@/components/base/HairlineGrid.vue";
import SectionHeader from "@/components/base/SectionHeader.vue";
import StackedLayersGraphic from "@/components/base/StackedLayersGraphic.vue";
import { toPersianDigits } from "@/lib/utils";

const steps = [
  {
    title: "ارزیابی بلوغ داده و فرایند",
    description:
      "تصویر دقیقی از وضعیت امروز به‌دست می‌آورید: کیفیت داده‌ها، فرایندهای کلیدی، سامانه‌های موجود و شکاف‌ها.",
  },
  {
    title: "معماری داده و یکپارچه‌سازی",
    description:
      "داده‌های پراکنده در سامانه‌های جزیره‌ای به یک منبع حقیقت واحد و قابل اتکا برای تصمیم‌گیری تبدیل می‌شوند.",
  },
  {
    title: "بازطراحی و خودکارسازی فرایند",
    description:
      "فرایندهای پرتکرار و قاعده‌مند پیش از خودکارسازی بازطراحی می‌شوند تا ظرفیت تیم آزاد شود، نه آشفتگی سریع‌تر.",
  },
  {
    title: "استقرار هوش مصنوعی در عملیات",
    description:
      "مدل‌ها در نقاط تصمیم واقعی سازمان مستقر می‌شوند؛ با سنجه اثر، مالک مشخص و مسیر پذیرش در تیم‌ها.",
  },
];

const label = (index: number) => toPersianDigits(String(index + 1).padStart(2, "0"));
</script>

<template>
  <section id="approach" class="section-block scroll-anchor">
    <SectionHeader
      title="از کجا شروع کنیم"
      subtitle="چهار گام پایه در هوشمندسازی سازمان"
    />

    <!-- Reference layout: the four steps fill one half as a 2×2 grid; a single
         stacked-layers illustration fills the other half across both rows. -->
    <div class="border-hairline border-t lg:grid lg:grid-cols-2">
      <HairlineGrid :cols="2" :top-rule="false">
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          class="flex flex-col p-8 lg:p-12.5"
        >
          <span class="type-eyebrow block">{{ label(index) }}</span>
          <h3 class="type-card-title mt-10 lg:mt-12.5">{{ step.title }}</h3>
          <p class="type-body mt-2">{{ step.description }}</p>
        </div>
      </HairlineGrid>

      <div
        class="border-hairline relative min-h-120 overflow-hidden border-b lg:min-h-0 lg:border-s lg:border-b-0"
      >
        <StackedLayersGraphic
          class="absolute inset-0 m-auto w-auto xl:w-full xl:max-w-none"
        />
      </div>
    </div>
  </section>
</template>
