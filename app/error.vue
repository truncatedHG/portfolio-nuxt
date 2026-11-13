<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

function goHome() {
  return clearError({ redirect: '/' })
}

useHead({
  title: () => props.error.statusCode === 404 ? '404 | Aldrian Diaz' : 'Error | Aldrian Diaz',
  htmlAttrs: { lang: 'en', 'data-theme': 'portfolio' },
})

useSeoMeta({ robots: 'noindex, nofollow' })
</script>

<template>
  <div class="fixed inset-0 overflow-hidden bg-base-100">
    <div class="absolute inset-x-0 top-0 z-50">
      <SiteNavbar />
    </div>
    <main class="absolute inset-0" aria-label="Error page">
      <div class="error-scene">
        <img
          src="/images/404.png"
          :alt="error.statusCode === 404 ? '404 — Page not found' : 'An error occurred'"
          class="h-full w-full"
        >
        <button
          class="home-sign cursor-pointer rounded-sm border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          type="button"
          aria-label="Back to home"
          @click="goHome"
        />
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Keep the hotspot aligned with the image as the viewport crops it. */
.error-scene {
  position: absolute;
  top: 50%;
  left: 50%;
  width: max(100vw, calc(100dvh * 16 / 9));
  height: max(100dvh, calc(100vw * 9 / 16));
  transform: translate(-50%, -50%);
}

.home-sign {
  position: absolute;
  left: 46.8%;
  top: 55.3%;
  width: 18%;
  height: 16.2%;
}
</style>
