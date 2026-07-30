<script setup lang="ts">
/**
 * Single illustration for the four-step section - a direct port of the
 * designsystems.com "blue.svg" artwork, mirrored for RTL so the stack
 * recedes toward the page centre (inline-end of this left-side cell).
 */
</script>

<template>
  <svg
    class="h-full max-w-full"
    viewBox="0 0 1100 1100"
    preserveAspectRatio="xMidYMid meet"
    role="presentation"
    aria-hidden="true"
  >
    <defs>
      <filter
        id="stacked-layers-glow"
        x="2.6"
        y="201.6"
        width="1088"
        height="870"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
      </filter>
    </defs>

    <!-- Soft blue wash behind the stack -->
    <g opacity="0.4" filter="url(#stacked-layers-glow)">
      <ellipse cx="553.4" cy="636.7" rx="344" ry="235.2" fill="#3366E9" />
    </g>

    <!-- Four panels, darkest/front at the outer (inline-start) edge -->
    <rect x="200" y="167" width="538" height="460" fill="#00A4F0" />
    <rect x="261" y="227" width="538" height="460" fill="#1FB8FF" />
    <rect x="321" y="288" width="538" height="460" fill="#4CC7FF" />
    <rect x="382" y="348" width="538" height="460" fill="#84D8FF" />
  </svg>
</template>
