<script setup lang="ts">
import OrivoMark from "@/components/OrivoMark.vue";

withDefaults(
  defineProps<{
    size?: "sm" | "md" | "lg";
  }>(),
  { size: "md" },
);

const textClass = {
  sm: "text-xl",
  md: "text-[28px] sm:text-[34px]",
  lg: "text-[34px] sm:text-[40px]",
} as const;

const markSize = {
  sm: 20,
  md: 26,
  lg: 32,
} as const;
</script>

<template>
  <span class="flex items-center gap-2.5 sm:gap-3">
    <OrivoMark :size="markSize[size]" class="mt-auto" />
    <span
      class="font-latin font-semibold leading-none tracking-[-0.03em] lowercase"
      :class="textClass[size]"
    >
      orivo
    </span>
  </span>
</template>
