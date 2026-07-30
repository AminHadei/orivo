<script setup lang="ts">
import ArrowLink from "@/components/base/ArrowLink.vue";
import ArticleCard from "@/components/base/ArticleCard.vue";
import HairlineGrid from "@/components/base/HairlineGrid.vue";
import SectionHeader from "@/components/base/SectionHeader.vue";
import TriangleMark from "@/components/base/TriangleMark.vue";

const posts = useBlogPosts().slice(0, 3);
</script>

<template>
  <section
    class="section-block relative overflow-x-clip overflow-y-visible max-sm:overflow-x-visible"
  >
    <TriangleMark />

    <div class="relative z-10">
      <SectionHeader
        title="آخرین مقالات"
        subtitle="یادداشت‌هایی درباره داده، فرایند و تصمیم"
      />

      <HairlineGrid :cols="3">
        <ArticleCard
          v-for="post in posts"
          :key="post.slug"
          :eyebrow="post.category"
          :title="post.title"
          :description="post.shortSummary"
          :meta="formatReadingTime(post.readingMinutes)"
          :to="`/blog/${post.slug}`"
          translucent-hover
        />
      </HairlineGrid>

      <ArrowLink to="/blog" label="همه مقالات" row />
    </div>
  </section>
</template>
