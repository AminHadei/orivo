<script setup lang="ts">
import { Menu, X } from "@lucide/vue";
import { onKeyStroke, useScrollLock, useWindowScroll } from "@vueuse/core";
import LogoLink from "@/components/LogoLink.vue";
import HairlineGrid from "@/components/base/HairlineGrid.vue";

const menuOpen = ref(false);
const { y } = useWindowScroll();

/* The band starts fully transparent so the hero shape shows through it, then
   fades to solid white across the first screenful of scrolling. Its height and
   the wordmark never change, so the layout cannot shift. */
const bandOpacity = computed(() => Math.min(1, Math.max(0, y.value / 160)));

const bandStyle = computed(() => ({
  backgroundColor: `rgb(255 255 255 / ${bandOpacity.value.toFixed(3)})`,
  /* Hairline fades in with the fill so the band starts fully transparent. */
  borderBottomColor: `rgb(0 0 0 / ${bandOpacity.value.toFixed(3)})`,
}));

const route = useRoute();
watch(
  () => route.fullPath,
  () => (menuOpen.value = false),
);

onKeyStroke("Escape", () => (menuOpen.value = false));

const bodyLocked = import.meta.client ? useScrollLock(document.body) : ref(false);
watch(menuOpen, (open) => (bodyLocked.value = open));
onUnmounted(() => (bodyLocked.value = false));

const menuEntries = [
  { title: "خدمات", subtitle: "مسیرهای همکاری با اوریوو", to: "/#services" },
  { title: "رویکرد", subtitle: "چارچوب هوشمندسازی در چهار گام", to: "/#approach" },
  { title: "مقالات", subtitle: "یادداشت‌ها و تحلیل‌های اوریوو", to: "/blog" },
  { title: "تماس", subtitle: "شروع گفت‌وگو درباره سازمان شما", to: "/#contact" },
];
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-transparent transition-[background-color,border-color] duration-200"
    :style="bandStyle"
  >
    <div class="gutter flex h-(--header-h) items-end justify-between pb-4 lg:pb-5">
      <div class="flex min-w-0 items-end gap-4 sm:gap-8">
        <LogoLink size="lg" class="shrink-0" />
        <p class="type-meta text-foreground hidden truncate pb-0.5 sm:block">
          مشاوره هوشمندسازی سازمان
        </p>
      </div>

      <button
        type="button"
        class="border-hairline hover:bg-foreground hover:text-background flex size-11 shrink-0 items-center justify-center rounded-full border transition-colors"
        :aria-expanded="menuOpen"
        aria-label="فهرست سایت"
        @click="menuOpen = !menuOpen"
      >
        <Menu v-if="!menuOpen" class="size-5" />
        <X v-else class="size-5" />
      </button>
    </div>

    <Transition
      enter-from-class="opacity-0"
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-200"
      leave-to-class="opacity-0"
    >
      <div v-if="menuOpen" class="bg-background fixed inset-0 z-50 flex flex-col">
        <div
          class="gutter border-hairline flex h-(--header-h) items-end justify-between border-b pb-4 lg:pb-5"
        >
          <LogoLink size="lg" class="shrink-0" />
          <button
            type="button"
            class="border-hairline hover:bg-foreground hover:text-background flex size-11 items-center justify-center rounded-full border transition-colors"
            aria-label="بستن فهرست"
            @click="menuOpen = false"
          >
            <X class="size-5" />
          </button>
        </div>

        <nav class="flex-1 overflow-y-auto">
          <HairlineGrid :cols="2" :top-rule="false">
            <NuxtLink
              v-for="entry in menuEntries"
              :key="entry.to"
              :to="entry.to"
              class="text-foreground hover:bg-muted block p-8 no-underline transition-colors lg:p-12.5"
              @click="menuOpen = false"
            >
              <span class="type-card-title block">{{ entry.title }}</span>
              <span class="type-body mt-1 block">{{ entry.subtitle }}</span>
            </NuxtLink>
          </HairlineGrid>
        </nav>
      </div>
    </Transition>
  </header>
</template>
