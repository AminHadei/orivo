<script setup lang="ts">
import type { ShapeVariant } from "~/types/blog";

/**
 * Decorative disc behind a page hero or section header. The reference site ships
 * these as bitmaps: a hard-edged multicolour disc, a saturated companion disc
 * peeking out behind it, and a wide soft glow. This rebuilds the same three
 * layers in CSS so it mirrors in RTL and scales with the viewport.
 *
 * Never blur the front disc - the reference keeps a crisp circle; only the
 * outer glow is soft.
 */
const props = withDefaults(
  defineProps<{
    variant?: ShapeVariant;
    /** Diameter of the front disc. */
    size?: string;
    /** Offset of the box from the inline start edge - negative crops the disc. */
    start?: string;
    top?: string;
    bottom?: string;
  }>(),
  {
    variant: "spectrum",
    size: "min(40rem, 72vw)",
    start: "-4rem",
    top: "auto",
    bottom: "auto",
  },
);

type Layers = {
  disc: string;
  companion: string;
  glow: string;
};

/* Mesh of overlapping radials over a flat base. Positions are mirrored for RTL
   so cool tones sit on the outer (inline-start) edge, matching the reference. */
const layers: Record<ShapeVariant, Layers> = {
  spectrum: {
    disc: [
      "radial-gradient(circle at 72% 18%, #7CFC00 0%, rgb(124 252 0 / 0) 42%)",
      "radial-gradient(circle at 88% 38%, #22c55e 0%, rgb(34 197 94 / 0) 48%)",
      "radial-gradient(circle at 92% 58%, #3aa8f0 0%, rgb(58 168 240 / 0) 46%)",
      "radial-gradient(circle at 70% 92%, #f97316 0%, rgb(249 115 22 / 0) 44%)",
      "radial-gradient(circle at 48% 78%, #fb923c 0%, rgb(251 146 60 / 0) 42%)",
      "radial-gradient(circle at 28% 48%, #ffc400 0%, #ffc400 100%)",
    ].join(", "),
    companion: "#ffc800",
    glow: "radial-gradient(circle at 50% 50%, #fff3cd 0%, #ecfdf5 48%, transparent 70%)",
  },
  citrus: {
    disc: [
      "radial-gradient(circle at 68% 28%, #ffe459 0%, rgb(255 228 89 / 0) 55%)",
      "radial-gradient(circle at 40% 78%, #fcb500 0%, rgb(252 181 0 / 0) 55%)",
      "radial-gradient(circle at 55% 50%, #ffc400 0%, #ffc400 100%)",
    ].join(", "),
    companion: "#ffdb35",
    glow: "radial-gradient(circle at 50% 50%, #fff6d6 0%, transparent 68%)",
  },
  mint: {
    disc: [
      "radial-gradient(circle at 70% 22%, #34d399 0%, rgb(52 211 153 / 0) 52%)",
      "radial-gradient(circle at 92% 58%, #22d3ee 0%, rgb(34 211 238 / 0) 48%)",
      "radial-gradient(circle at 36% 82%, #a3e635 0%, rgb(163 230 53 / 0) 48%)",
      "radial-gradient(circle at 44% 48%, #6ee7b7 0%, #6ee7b7 100%)",
    ].join(", "),
    companion: "#86efac",
    glow: "radial-gradient(circle at 50% 50%, #e0fbf1 0%, transparent 68%)",
  },
  dusk: {
    disc: [
      "radial-gradient(circle at 68% 20%, #a78bfa 0%, rgb(167 139 250 / 0) 52%)",
      "radial-gradient(circle at 92% 52%, #60a5fa 0%, rgb(96 165 250 / 0) 48%)",
      "radial-gradient(circle at 38% 88%, #f0abfc 0%, rgb(240 171 252 / 0) 48%)",
      "radial-gradient(circle at 40% 46%, #c4b5fd 0%, #c4b5fd 100%)",
    ].join(", "),
    companion: "#c4b5fd",
    glow: "radial-gradient(circle at 50% 50%, #eeeaff 0%, transparent 68%)",
  },
};

const box = computed(() => ({
  width: props.size,
  height: props.size,
  insetInlineStart: props.start,
  top: props.top,
  bottom: props.bottom,
}));

const disc = computed(() => ({ backgroundImage: layers[props.variant].disc }));

/* Reference proportions: companion ~14% wider, offset further toward the outer
   edge and slightly higher so a crescent peeks out behind the front disc. */
const companion = computed(() => ({
  width: "114%",
  height: "114%",
  insetInlineStart: "-29%",
  top: "-10%",
  backgroundColor: layers[props.variant].companion,
}));

const glow = computed(() => ({
  width: "var(--disc-glow-width)",
  height: "var(--disc-glow-width)",
  insetInlineStart: "-45%",
  top: "-45%",
  backgroundImage: layers[props.variant].glow,
  filter: "blur(var(--disc-glow-blur))",
}));
</script>

<template>
  <div aria-hidden="true" class="pointer-events-none absolute -z-10 select-none" :style="box">
    <span class="absolute rounded-full" :style="glow" />
    <span class="absolute rounded-full" :style="companion" />
    <span class="absolute inset-0 rounded-full" :style="disc" />
  </div>
</template>
