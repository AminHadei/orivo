<script setup lang="ts">
import { ArrowLeft } from "@lucide/vue";
import type { BlogPost } from "~/types/blog";

const props = defineProps<{
  post: BlogPost;
}>();

const meta = computed(
  () => `${props.post.dateLabel} · ${formatReadingTime(props.post.readingMinutes)}`,
);
</script>

<template>
  <NuxtLink
    :to="`/blog/${post.slug}`"
    class="group flex h-full flex-col p-8 text-foreground no-underline transition-colors hover:bg-muted lg:p-[50px]"
  >
    <span class="type-eyebrow block">{{ post.category }}</span>

    <h3 class="type-card-title mt-10 lg:mt-[50px]">{{ post.title }}</h3>
    <p class="type-body mt-2">{{ post.shortSummary }}</p>

    <div class="mt-auto flex items-center justify-between gap-4 pt-8">
      <span class="type-meta">{{ meta }}</span>
      <ArrowLeft class="size-5 shrink-0 transition-transform duration-300 group-hover:-translate-x-1.5" />
    </div>
  </NuxtLink>
</template>
