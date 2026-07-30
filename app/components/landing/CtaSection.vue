<script setup lang="ts">
import { ArrowLeft } from "@lucide/vue";
import ArrowLink from "@/components/base/ArrowLink.vue";
import HairlineGrid from "@/components/base/HairlineGrid.vue";

const email = ref("");
const submitted = ref(false);

function onSubmit() {
  if (!email.value) return;
  submitted.value = true;
}
</script>

<template>
  <section id="contact" class="mt-64 lg:mt-none">
    <HairlineGrid :cols="2" :bottomRule="false">
      <div class="p-8 lg:p-[50px]">
        <div class="max-w-110">
          <h3 class="type-card-title">آماده شروع هستید؟</h3>
          <p class="type-body mt-2">
            چالش سازمانی، فرایند پرهزینه یا پرسش‌تان درباره داده و هوش مصنوعی را بفرستید. در نخستین
            گفت‌وگو تصویری از مسیر پیش رو به‌دست می‌آورید.
          </p>
          <div class="mt-6">
            <ArrowLink href="mailto:aminhadei@gmail.com" label="گفت‌وگو را شروع کنید" />
          </div>
        </div>
      </div>

      <div class="p-8 lg:p-[50px]">
        <div class="max-w-110">
          <h3 class="type-card-title">خبرنامه اوریوو</h3>
          <p class="type-body mt-2">
            یادداشت‌های تازه درباره هوشمندسازی سازمان را با فاصله منظم دریافت کنید.
          </p>

          <form class="mt-6 flex items-center gap-3 border-b border-hairline pb-3" @submit.prevent="onSubmit">
            <input
              v-model="email"
              type="email"
              required
              placeholder="نشانی ایمیل شما"
              aria-label="نشانی ایمیل"
              class="type-body min-w-0 flex-1 bg-transparent placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              class="flex size-9 shrink-0 items-center justify-center rounded-full border border-hairline transition-colors hover:bg-foreground hover:text-background"
              aria-label="ثبت در خبرنامه"
            >
              <ArrowLeft class="size-4" />
            </button>
          </form>

          <p class="type-meta mt-4">
            <span v-if="submitted">نشانی شما ثبت شد. به‌زودی خبرنامه را دریافت می‌کنید.</span>
            <span v-else>با ثبت ایمیل، دریافت خبرنامه اوریوو را می‌پذیرید. هر زمان می‌توانید لغو کنید.</span>
          </p>
        </div>
      </div>
    </HairlineGrid>
  </section>
</template>
