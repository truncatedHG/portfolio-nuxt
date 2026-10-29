<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

useHead({
  title: 'Web Portfolio | Aldrian Diaz',
  meta: [
    { charset: 'UTF-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
  ],
  link: [
    {
      rel: 'icon',
      href: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Truncated_octahedron_(green).png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap',
    },
  ],
})
</script>

<template>
  <main id="index-body">
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

    <br>

    <div class="has-text-centered name">
      <h1 class="is-size-1">Aldrian Diaz</h1>
      <h2 class="is-size-4">An aspiring database administrator.</h2>

      <br><br>

      <figure class="image is-128x128 is-inline-block">
        <img class="is-rounded" src="/images/aldrian.JPEG" alt="A self portrait">
      </figure>
    </div>
  </main>
</template>
