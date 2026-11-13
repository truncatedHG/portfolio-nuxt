<script setup lang="ts">
import { ref, watch } from 'vue'

const isMenuOpen = ref(false)
const route = useRoute()
const links = [
  { to: '/', label: 'Home' },
  { to: '/about-me', label: 'About Me' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/tech-stack', label: 'Tech Stack' },
]

watch(() => route.fullPath, () => { isMenuOpen.value = false })
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-primary/15 bg-base-100/95 backdrop-blur-xl">
    <nav class="navbar mx-auto max-w-6xl flex-wrap justify-end gap-y-3 px-5 py-4 sm:px-8" aria-label="Main navigation">
      <button class="btn btn-ghost btn-square lg:hidden" type="button" aria-label="Toggle navigation" :aria-expanded="isMenuOpen" aria-controls="navMenu" @click="isMenuOpen = !isMenuOpen">
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
          <path v-if="isMenuOpen" d="m6 6 12 12M6 18 18 6" />
          <path v-else d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div id="navMenu" class="w-full lg:block lg:w-auto lg:mx-auto" :class="isMenuOpen ? 'block' : 'hidden'">
        <ul class="menu w-full gap-1 rounded-2xl bg-primary/5 p-1.5 lg:menu-horizontal">
          <li v-for="link in links" :key="link.to">
            <NuxtLink class="navbar-item rounded-xl px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary/10" :class="route.path === link.to ? 'bg-primary text-primary-content hover:bg-primary' : 'text-base-content/75'" :to="link.to" @click="isMenuOpen = false">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
