<script setup lang="ts">
/**
 * Soft coral triangle mark used beside section titles on the reference site
 * (Design Operations). On the LTR original it sits on the trailing edge, opposite
 * the title - so in RTL it lands on the visual left (inline-end).
 */
withDefaults(
  defineProps<{
    size?: string;
  }>(),
  { size: "var(--mark-triangle-size)" },
);

const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
</script>

<template>
  <svg
    aria-hidden="true"
    class="section-mark section-mark--triangle pointer-events-none absolute z-0 translate-x-[-22%] select-none"
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
        :id="`tri-glow-${uid}`"
        x="40.7"
        y="32.8"
        width="985.6"
        height="1020.4"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur" />
      </filter>
      <linearGradient
        :id="`tri-a-${uid}`"
        x1="533.5"
        y1="182.8"
        x2="533.5"
        y2="903.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF6A6A" />
        <stop offset="1" stop-color="#FFB190" />
      </linearGradient>
      <linearGradient
        :id="`tri-b-${uid}`"
        x1="642.8"
        y1="245.2"
        x2="642.8"
        y2="840"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF6A6A" />
        <stop offset="1" stop-color="#FFB190" />
      </linearGradient>
      <linearGradient
        :id="`tri-c-${uid}`"
        x1="731.9"
        y1="840"
        x2="731.9"
        y2="771.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF6A6A" />
        <stop offset="1" stop-color="#FF6A6A" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        :id="`tri-d-${uid}`"
        x1="647.5"
        y1="540.1"
        x2="769.2"
        y2="643.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF6A6A" />
        <stop offset="1" stop-color="#FF6A6A" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        :id="`tri-e-${uid}`"
        x1="553.3"
        y1="507.9"
        x2="553.3"
        y2="766.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF6A6A" />
        <stop offset="1" stop-color="#FF6A6A" stop-opacity="0" />
      </linearGradient>
      <clipPath :id="`tri-clip-${uid}`">
        <rect width="949" height="984" fill="white" transform="translate(59 51)" />
      </clipPath>
    </defs>

    <!-- Mirror so the right-angle sits on the outer (left) edge in RTL. -->
    <g :clip-path="`url(#tri-clip-${uid})`" transform="translate(1100 0) scale(-1 1)">
      <g :filter="`url(#tri-glow-${uid})`">
        <path
          d="M876.316 903.215V182.786L190.684 903.215H876.316Z"
          :fill="`url(#tri-a-${uid})`"
          fill-opacity="0.2"
        />
      </g>
      <path
        d="M925.767 839.958V245.165L359.784 839.958H925.767Z"
        :fill="`url(#tri-b-${uid})`"
      />
      <path
        d="M698.982 771.055V839.958L764.794 771.055H698.982Z"
        :fill="`url(#tri-c-${uid})`"
        fill-opacity="0.2"
      />
      <path
        d="M698.982 550.029V737.165L876.316 550.029H698.982Z"
        :fill="`url(#tri-d-${uid})`"
        fill-opacity="0.4"
      />
      <path
        d="M676.157 766.157V507.857L430.348 766.157H676.157Z"
        :fill="`url(#tri-e-${uid})`"
        fill-opacity="0.4"
      />
    </g>
  </svg>
</template>
