<script setup lang="ts">
import { ArrowDownIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-primary focus:p-3 focus:text-primary-content"><ArrowDownIcon class="mr-2 inline-block h-5 w-5" aria-hidden="true" />Skip to content</a>
    <SiteNavbar />
    <main id="main-content" class="mx-auto w-full max-w-6xl flex-1 px-5 py-12 sm:px-8 sm:py-16 lg:py-20" tabindex="-1">
      <slot />
    </main>
  </div>
</template>
