import tailwindcss from "@tailwindcss/vite";

const baseURL = process.env.NUXT_APP_BASE_URL || "/orivo/";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/tailwind.css"],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@lucide/vue", "@vueuse/core", "clsx", "tailwind-merge"],
    },
  },

  modules: ["shadcn-nuxt"],

  shadcn: {
    prefix: "",
    componentDir: "@/components/ui",
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  router: {
    options: {
      scrollBehavior(to, _from, savedPosition) {
        if (savedPosition) return savedPosition;
        if (to.hash) return { el: to.hash, behavior: "smooth" };
        return { top: 0 };
      },
    },
  },

  app: {
    baseURL,
    head: {
      htmlAttrs: {
        dir: "rtl",
        lang: "fa",
      },
      title: "اوریوو | مشاوره هوشمندسازی سازمان",
      meta: [
        {
          name: "description",
          content:
            "اوریوو؛ مشاوره هوشمندسازی سازمان - از ارزیابی بلوغ داده و بازطراحی فرایند تا استقرار هوش مصنوعی در عملیات.",
        },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap",
        },
        // Nuxt does not auto-prefix head link hrefs with baseURL - required for GitHub Pages.
        { rel: "icon", type: "image/svg+xml", href: `${baseURL}favicon.svg` },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: `${baseURL}favicon-mono.svg`,
          media: "(prefers-color-scheme: dark)",
        },
        { rel: "icon", href: `${baseURL}favicon.ico`, sizes: "48x48" },
        { rel: "apple-touch-icon", href: `${baseURL}apple-touch-icon.png` },
        { rel: "manifest", href: `${baseURL}site.webmanifest` },
      ],
    },
  },
});
