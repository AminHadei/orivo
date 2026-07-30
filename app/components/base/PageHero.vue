<script setup lang="ts">
import type { ShapeVariant } from "~/types/blog";
import BackdropShape from "@/components/base/BackdropShape.vue";

withDefaults(
  defineProps<{
    variant?: ShapeVariant;
    /** Full viewport height on desktop - homepage hero only. */
    fullHeight?: boolean;
  }>(),
  { variant: "spectrum", fullHeight: false },
);
</script>

<template>
  <section
    class="hero-block relative isolate overflow-hidden px-6 pb-10 sm:px-8 lg:ps-[410px] lg:pe-[50px] lg:pb-[60px]"
    :class="fullHeight ? 'min-h-[80vh] sm:min-h-[85vh] lg:min-h-screen' : ''"
  >
    <BackdropShape
      :variant="variant"
      size="var(--hero-disc-size)"
      start="var(--hero-disc-start)"
      top="var(--hero-disc-top)"
    />

    <slot />
  </section>
</template>
