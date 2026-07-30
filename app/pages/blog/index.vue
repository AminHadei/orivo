<script setup lang="ts">
import PageHero from "@/components/base/PageHero.vue";
import HairlineGrid from "@/components/base/HairlineGrid.vue";

const posts = useBlogPosts();

useSeoMeta({
  title: "مقالات | اوریوو",
  description:
    "یادداشت‌ها و تحلیل‌های اوریوو درباره هوشمندسازی سازمان: بلوغ داده، بازطراحی فرایند، سامانه‌های تصمیم‌یار و مدیریت تحول.",
});
</script>

<template>
  <div>
    <PageHero variant="dusk">
      <p class="type-eyebrow tracking-[0.04em] text-foreground">مقالات اوریوو</p>

      <h1 class="type-display mt-5 max-w-215">
        یادداشت‌هایی درباره داده، فرایند و تصمیم در سازمان
      </h1>

      <p class="type-body mt-8 max-w-160">
        هر نوشته از یک مسئله واقعی در سازمان‌ها شروع می‌شود: جایی که داده هست اما تصمیم نیست، یا
        ابزار خریداری شده اما فرایند تغییر نکرده است.
      </p>
    </PageHero>

    <HairlineGrid :cols="3" :bottom-rule="false">
      <BlogPostCard v-for="post in posts" :key="post.slug" :post="post" />
    </HairlineGrid>
  </div>
</template>
