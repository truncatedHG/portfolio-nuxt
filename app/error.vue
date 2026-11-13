<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

// Place your image in public/images, then enter its filename here.
const imageFilename = ''

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
  <div class="flex min-h-dvh flex-col bg-base-100">
    <SiteNavbar />
    <main class="flex flex-1 flex-col items-center justify-center gap-8 px-5 py-12" aria-label="Error page">
      <img
        v-if="imageFilename"
        :src="`/images/${imageFilename}`"
        alt=""
        class="max-h-[65vh] w-full max-w-4xl object-contain"
      >
      <button class="btn btn-primary rounded-xl px-6" type="button" @click="goHome">
        Back to home
      </button>
    </main>
  </div>
</template>
