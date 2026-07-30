<script setup lang="ts">
import AppLogo from "@/components/AppLogo.vue";

withDefaults(
  defineProps<{
    size?: "sm" | "md" | "lg";
    class?: string;
  }>(),
  { size: "md" },
);

const route = useRoute();

function onClick(event: MouseEvent) {
  if (!import.meta.client || route.path !== "/") return;

  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <NuxtLink
    to="/"
    class="text-foreground no-underline"
    :class="class"
    aria-label="اوریوو"
    @click="onClick"
  >
    <AppLogo :size="size" />
  </NuxtLink>
</template>
