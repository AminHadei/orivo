<template>
  <div class="bg-background text-foreground flex min-h-screen flex-col overflow-x-clip">
    <SiteHeader />
    <main class="flex-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
