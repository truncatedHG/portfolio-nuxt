<script setup lang="ts">
import { ref, watch } from 'vue'
const isMenuOpen = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { isMenuOpen.value = false })
</script>

<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <button
          class="navbar-burger"
          :class="{ 'is-active': isMenuOpen }"
          type="button"
          aria-label="Toggle navigation"
          :aria-expanded="isMenuOpen"
          aria-controls="navMenu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navMenu" class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
        <div class="navbar-start is-flex-grow-1 is-justify-content-center">
          <NuxtLink class="navbar-item" to="/" @click="isMenuOpen = false">
            Home
          </NuxtLink>
          <NuxtLink class="navbar-item" to="/about-me" @click="isMenuOpen = false">
            About Me
          </NuxtLink>
          <NuxtLink class="navbar-item" to="/certifications" @click="isMenuOpen = false">
            Certifications
          </NuxtLink>
          <NuxtLink class="navbar-item" to="/tech-stack" @click="isMenuOpen = false">
            Tech Stack
          </NuxtLink>
        </div>
      </div>
    </nav>
</template>
