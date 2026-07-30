<script setup lang="ts">
/**
 * Yellow square + disc mark from the reference site (Design & Development).
 * Placed on the visual left (inline-end in RTL) of the industries section.
 */
withDefaults(
  defineProps<{
    size?: string;
  }>(),
  { size: "var(--mark-citrus-size)" },
);

const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
</script>

<template>
  <svg
    aria-hidden="true"
    class="section-mark section-mark--citrus pointer-events-none absolute z-0 select-none -translate-x-[22%]"
    :style="{
      width: size,
      height: size,
    }"
    viewBox="0 0 1100 1100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter
        :id="`citrus-glow-${uid}`"
        x="41.9"
        y="270.4"
        width="909.2"
        height="748.1"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
      </filter>
      <filter
        :id="`citrus-spot-${uid}`"
        x="368.4"
        y="-50"
        width="789.3"
        height="712.3"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
      </filter>
      <linearGradient
        :id="`citrus-grad-${uid}`"
        x1="661.7"
        y1="141.1"
        x2="661.7"
        y2="767.6"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FCB500" />
        <stop offset="1" stop-color="#FCCF00" stop-opacity="0.4" />
      </linearGradient>
      <mask
        :id="`citrus-mask-${uid}`"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="382"
        y="176"
        width="558"
        height="558"
      >
        <circle cx="661.2" cy="454.8" r="278.8" fill="#FFE459" />
      </mask>
    </defs>

    <rect x="240" y="295.9" width="537" height="537" fill="#FFDB35" />

    <g :filter="`url(#citrus-glow-${uid})`">
      <ellipse cx="496.5" cy="644.5" rx="254.6" ry="174.1" fill="#FCCF00" />
    </g>

    <g :mask="`url(#citrus-mask-${uid})`">
      <circle cx="661.7" cy="454.3" r="313.2" :fill="`url(#citrus-grad-${uid})`" />
      <g :filter="`url(#citrus-spot-${uid})`">
        <ellipse cx="763.1" cy="306.2" rx="194.7" ry="156.2" fill="#FCE300" />
      </g>
    </g>
  </svg>
</template>
