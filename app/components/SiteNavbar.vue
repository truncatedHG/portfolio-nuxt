<script setup lang="ts">
import { ref, watch } from 'vue'
import { HomeIcon, UserIcon, AcademicCapIcon, CodeBracketIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const isMenuOpen = ref(false)
const route = useRoute()
const error = useError()

function onNavigate(event: MouseEvent, to: string) {
  isMenuOpen.value = false
  if (error.value && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey && event.button === 0) {
    event.preventDefault()
    return clearError({ redirect: to })
  }
}
const links = [
  { to: '/', label: 'Home', icon: HomeIcon },
  { to: '/about-me', label: 'About Me', icon: UserIcon },
  { to: '/certifications', label: 'Certifications', icon: AcademicCapIcon },
  { to: '/tech-stack', label: 'Tech Stack', icon: CodeBracketIcon },
]

watch(() => route.fullPath, () => { isMenuOpen.value = false })
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-primary/15 bg-base-100/95 backdrop-blur-xl">
    <nav class="navbar mx-auto max-w-6xl flex-wrap justify-end gap-y-3 px-5 py-4 sm:px-8" aria-label="Main navigation">
      <button class="btn btn-ghost btn-square lg:hidden" type="button" aria-label="Toggle navigation" :aria-expanded="isMenuOpen" aria-controls="navMenu" @click="isMenuOpen = !isMenuOpen">
        <component :is="isMenuOpen ? XMarkIcon : Bars3Icon" class="h-5 w-5" aria-hidden="true" />
      </button>
      <div id="navMenu" class="w-full lg:block lg:w-auto lg:mx-auto" :class="isMenuOpen ? 'block' : 'hidden'">
        <ul class="flex w-full flex-col gap-1 rounded-2xl bg-primary/5 p-1.5 lg:flex-row">
          <li v-for="link in links" :key="link.to">
            <NuxtLink class="navbar-item flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium" :class="{ 'is-active': !error && route.path === link.to }" :to="link.to" @click="onNavigate($event, link.to)"><component :is="link.icon" class="h-5 w-5 shrink-0" aria-hidden="true" />{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar-item {
  color: var(--color-base-content);
  background-color: transparent;
  transition: background-color 200ms ease, box-shadow 200ms ease, transform 200ms ease;
}

.navbar-item:hover,
.navbar-item:focus-visible {
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
  box-shadow: 0 0 12px color-mix(in srgb, var(--color-primary) 18%, transparent);
}

.navbar-item.is-active {
  color: var(--color-primary-content);
  background-color: var(--color-primary);
}

@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  .navbar-item:hover {
    transform: translateY(-5px);
  }
}
</style>
