<script setup lang="ts">
/**
 * Stacked-layer mark — three hard-edged planes receding toward the centre.
 * Yellow stack matches site citrus / spectrum accents (not the blue illustration).
 */
withDefaults(
  defineProps<{
    size?: number;
    variant?: "color" | "mono";
  }>(),
  { size: 28, variant: "color" },
);

const layers = {
  color: ["#FFE459", "#FFDB35", "#FCB500"],
  mono: ["#000000", "#000000", "#000000"],
} as const;
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    fill="none"
    role="presentation"
    aria-hidden="true"
    class="shrink-0"
  >
    <g transform="translate(2 5.5)">
      <rect
        x="0"
        y="14"
        width="20"
        height="7"
        :fill="layers[variant][0]"
        :opacity="variant === 'mono' ? 0.28 : 1"
      />
      <rect
        x="4"
        y="7"
        width="20"
        height="7"
        :fill="layers[variant][1]"
        :opacity="variant === 'mono' ? 0.55 : 1"
      />
      <rect x="8" y="0" width="20" height="7" :fill="layers[variant][2]" />
    </g>
  </svg>
</template>
