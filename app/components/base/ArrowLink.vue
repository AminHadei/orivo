<script setup lang="ts">
import { ArrowLeft } from "@lucide/vue";
import { NuxtLink } from "#components";

withDefaults(
  defineProps<{
    to?: string;
    href?: string;
    label: string;
    /** Renders as a full-width row with a bottom hairline, like the reference. */
    row?: boolean;
  }>(),
  { row: false },
);
</script>

<template>
  <component
    :is="to ? NuxtLink : href ? 'a' : 'span'"
    :to="to"
    :href="href"
    class="group inline-flex items-center gap-3 text-foreground no-underline"
    :class="row ? 'gutter w-full border-b border-hairline py-7 text-xl' : 'text-base'"
  >
    <span class="underline-offset-[6px] group-hover:underline">{{ label }}</span>
    <ArrowLeft class="size-5 transition-transform duration-300 group-hover:-translate-x-1.5" />
  </component>
</template>
