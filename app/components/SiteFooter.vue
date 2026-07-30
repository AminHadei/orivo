<script setup lang="ts">
import LogoLink from "@/components/LogoLink.vue";

const links = [
  { label: "مقالات", to: "/blog" },
  { label: "خدمات", to: "/#services" },
  { label: "تماس", href: "mailto:aminhadei@gmail.com" },
];
</script>

<template>
  <footer class="gutter border-t border-hairline py-10 lg:py-[50px]">
    <div class="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <LogoLink size="md" />
      </div>

      <nav class="flex flex-wrap items-center gap-x-6 gap-y-2">
        <template v-for="link in links" :key="link.label">
          <NuxtLink
            v-if="link.to"
            :to="link.to"
            class="type-meta text-foreground underline-offset-4 hover:underline"
          >
            {{ link.label }}
          </NuxtLink>
          <a
            v-else
            :href="link.href"
            class="type-meta text-foreground underline-offset-4 hover:underline"
          >
            {{ link.label }}
          </a>
        </template>
      </nav>
    </div>
  </footer>
</template>
