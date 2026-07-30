<script setup lang="ts">
/**
 * Full-bleed grid whose cells are separated by 1px hairlines - the layout
 * primitive the whole site is built on. Dividers use logical properties so the
 * grid mirrors correctly in RTL.
 */
withDefaults(
  defineProps<{
    cols?: 2 | 3 | 4;
    /** Hairline above the first row. */
    topRule?: boolean;
    /** Hairline under the last row. Set false when the next sibling (e.g. footer) already draws one. */
    bottomRule?: boolean;
  }>(),
  { cols: 3, topRule: true, bottomRule: true },
);
</script>

<template>
  <div
    class="hairline-grid"
    :class="[
      `hairline-grid--${cols}`,
      topRule ? 'border-t border-hairline' : '',
      bottomRule ? '' : 'hairline-grid--flush-bottom',
    ]"
  >
    <slot />
  </div>
</template>

<style scoped>
.hairline-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
}

.hairline-grid :deep(> *) {
  border-block-end: 1px solid var(--hairline);
  min-width: 0;
}

/* One column: only the final cell sits on the last row. */
.hairline-grid--flush-bottom :deep(> *:last-child) {
  border-block-end: 0;
}

@media (min-width: 768px) {
  .hairline-grid--2,
  .hairline-grid--3,
  .hairline-grid--4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hairline-grid :deep(> *) {
    border-inline-end: 1px solid var(--hairline);
  }

  .hairline-grid--2 :deep(> *:nth-child(2n)),
  .hairline-grid--3 :deep(> *:nth-child(2n)),
  .hairline-grid--4 :deep(> *:nth-child(2n)) {
    border-inline-end: 0;
  }

  /* Two-column last row - only while the grid is actually 2 columns.
     --2 stays at 2 cols from md up; --3/--4 only between md and lg. */
  .hairline-grid--flush-bottom.hairline-grid--2 :deep(> *:nth-child(2n + 1):nth-last-child(-n + 2)),
  .hairline-grid--flush-bottom.hairline-grid--2 :deep(> *:nth-child(2n + 1):nth-last-child(-n + 2) ~ *) {
    border-block-end: 0;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .hairline-grid--flush-bottom.hairline-grid--3 :deep(> *:nth-child(2n + 1):nth-last-child(-n + 2)),
  .hairline-grid--flush-bottom.hairline-grid--3 :deep(> *:nth-child(2n + 1):nth-last-child(-n + 2) ~ *),
  .hairline-grid--flush-bottom.hairline-grid--4 :deep(> *:nth-child(2n + 1):nth-last-child(-n + 2)),
  .hairline-grid--flush-bottom.hairline-grid--4 :deep(> *:nth-child(2n + 1):nth-last-child(-n + 2) ~ *) {
    border-block-end: 0;
  }
}

@media (min-width: 1024px) {
  .hairline-grid--3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .hairline-grid--3 :deep(> *:nth-child(2n)) {
    border-inline-end: 1px solid var(--hairline);
  }

  .hairline-grid--3 :deep(> *:nth-child(3n)) {
    border-inline-end: 0;
  }

  .hairline-grid--flush-bottom.hairline-grid--3 :deep(> *:nth-child(3n + 1):nth-last-child(-n + 3)),
  .hairline-grid--flush-bottom.hairline-grid--3 :deep(> *:nth-child(3n + 1):nth-last-child(-n + 3) ~ *) {
    border-block-end: 0;
  }

  .hairline-grid--4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .hairline-grid--4 :deep(> *:nth-child(2n)) {
    border-inline-end: 1px solid var(--hairline);
  }

  .hairline-grid--4 :deep(> *:nth-child(4n)) {
    border-inline-end: 0;
  }

  .hairline-grid--flush-bottom.hairline-grid--4 :deep(> *:nth-child(4n + 1):nth-last-child(-n + 4)),
  .hairline-grid--flush-bottom.hairline-grid--4 :deep(> *:nth-child(4n + 1):nth-last-child(-n + 4) ~ *) {
    border-block-end: 0;
  }
}
</style>
