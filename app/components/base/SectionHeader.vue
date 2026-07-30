<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<template>
  <header class="gutter pb-7">
    <h2 class="type-section-title">{{ title }}</h2>
    <p v-if="subtitle" class="type-body mt-1">{{ subtitle }}</p>
  </header>
</template>
