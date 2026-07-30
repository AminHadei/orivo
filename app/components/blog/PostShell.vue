<script setup lang="ts">
import ArrowLink from "@/components/base/ArrowLink.vue";
import PageHero from "@/components/base/PageHero.vue";

const props = defineProps<{
  slug: string;
}>();

const post = useBlogPost(props.slug);

if (!post) {
  throw createError({ statusCode: 404, statusMessage: "Post not found" });
}

useSeoMeta({
  title: `${post.title} | اوریوو`,
  description: post.summary,
});

const authorsLabel = formatBlogAuthors(post.authors);
const readingLabel = formatReadingTime(post.readingMinutes);
</script>

<template>
  <article>
    <PageHero :variant="post.shape">
      <p class="type-eyebrow text-foreground tracking-[0.04em]">{{ post.category }}</p>

      <h1 class="type-display mt-5 max-w-215">{{ post.title }}</h1>

      <p class="type-body mt-8 max-w-160">{{ post.summary }}</p>

      <div class="type-meta mt-8 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span class="text-foreground">{{ authorsLabel }}</span>
        <span aria-hidden="true">·</span>
        <time :datetime="post.date">{{ post.dateLabel }}</time>
        <span aria-hidden="true">·</span>
        <span>{{ readingLabel }}</span>
      </div>
    </PageHero>

    <div class="border-hairline border-t">
      <div class="prose-fa gutter max-w-3xl py-12 lg:py-20">
        <slot />
      </div>
    </div>

    <div class="border-hairline border-t">
      <ArrowLink class="border-b-0" to="/blog" label="بازگشت به همه مقالات" row />
    </div>
  </article>
</template>

<style scoped>
.prose-fa :deep(h2) {
  margin-block: 3rem 1rem;
  font-size: clamp(1.375rem, 2vw, 1.75rem);
  font-weight: 500;
  line-height: 1.6;
}

.prose-fa :deep(h3) {
  margin-block: 2.25rem 0.75rem;
  font-size: clamp(1.125rem, 1.5vw, 1.375rem);
  font-weight: 500;
  line-height: 1.7;
}

.prose-fa :deep(p) {
  margin-block: 1.25rem;
  font-size: 1.0625rem;
  line-height: 2.05;
}

.prose-fa :deep(ul),
.prose-fa :deep(ol) {
  margin-block: 1.25rem;
  padding-inline-start: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  font-size: 1.0625rem;
  line-height: 2;
}

.prose-fa :deep(ul) {
  list-style: disc;
}

.prose-fa :deep(ol) {
  list-style: decimal;
}

.prose-fa :deep(li)::marker {
  color: var(--muted-foreground);
}

.prose-fa :deep(strong) {
  font-weight: 600;
}

.prose-fa :deep(blockquote) {
  margin-block: 2rem;
  border-inline-start: 2px solid var(--hairline);
  padding-inline-start: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.95;
}

.prose-fa :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin-block: 2rem;
  font-size: 0.9375rem;
}

.prose-fa :deep(th),
.prose-fa :deep(td) {
  border: 1px solid var(--hairline);
  padding: 0.75rem 1rem;
  text-align: start;
  vertical-align: top;
  line-height: 1.8;
}

.prose-fa :deep(th) {
  font-weight: 600;
  background: var(--muted);
}

.prose-fa :deep(.table-wrap) {
  overflow-x: auto;
  margin-block: 2rem;
}
</style>
