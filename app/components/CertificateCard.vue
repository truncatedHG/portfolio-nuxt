<script setup lang="ts">
import { ArrowTopRightOnSquareIcon, MagnifyingGlassPlusIcon } from '@heroicons/vue/24/outline'
import type { Certificate } from '~/types/certificate'
defineProps<{ certificate: Certificate }>()
const emit = defineEmits<{ select: [certificate: Certificate] }>()
</script>

<template>
  <article class="card content group overflow-hidden rounded-2xl border border-primary/15 bg-white/30 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10">
    <button class="relative grid w-full cursor-pointer place-items-center border-b border-primary/10 bg-white/30 p-8 transition-colors hover:bg-white/60" type="button" :aria-label="`View ${certificate.title} certificate`" @click="emit('select', certificate)">
      <img class="h-40 w-40 object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none" :src="certificate.preview" :alt="certificate.alt" loading="lazy">
      <span class="absolute right-3 bottom-3 rounded-full bg-base-100 p-2 text-primary"><MagnifyingGlassPlusIcon class="h-5 w-5" aria-hidden="true" /></span>
    </button>
    <div class="card-body p-6">
      <h2 class="card-title text-lg leading-snug">
        <a class="link link-hover inline-flex items-center gap-2 text-primary" :href="certificate.link" target="_blank" rel="noopener noreferrer">{{ certificate.title }}<ArrowTopRightOnSquareIcon class="h-5 w-5 shrink-0" aria-hidden="true" /></a>
      </h2>
    </div>
  </article>
</template>
