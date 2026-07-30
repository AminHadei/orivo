<script setup lang="ts">
import { ArrowLeft } from "@lucide/vue";
import { NuxtLink } from "#components";

withDefaults(
  defineProps<{
    eyebrow?: string;
    title: string;
    description?: string;
    meta?: string;
    /** Cards without a destination stay static - the reference links them, ours don't yet. */
    to?: string;
    /** Semi-transparent hover so decorative shapes behind the card stay visible. */
    translucentHover?: boolean;
  }>(),
  { to: undefined, translucentHover: false },
);
</script>

<template>
  <component
    :is="to ? NuxtLink : 'div'"
    :to="to"
    class="group text-foreground flex h-full flex-col p-8 no-underline lg:p-12.5"
    :class="
      to
        ? translucentHover
          ? 'hover:bg-muted/40 transition-colors'
          : 'hover:bg-muted transition-colors'
        : ''
    "
  >
    <span v-if="eyebrow" class="type-eyebrow block">{{ eyebrow }}</span>

    <h3 class="type-card-title mt-10 lg:mt-12.5">{{ title }}</h3>
    <p v-if="description" class="type-body mt-2">{{ description }}</p>

    <div class="mt-auto flex items-center justify-between gap-4 pt-8">
      <span v-if="meta" class="type-meta">{{ meta }}</span>
      <ArrowLeft
        v-if="to"
        class="size-5 shrink-0 transition-transform duration-300 group-hover:-translate-x-1.5"
      />
    </div>
  </component>
</template>
