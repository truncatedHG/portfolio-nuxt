<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

useHead({
  title: 'Tech Stack | Aldrian Diaz',
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

    <div class="has-text-centered">
      <h1 class="is-size-1 name">Languages</h1>
    </div>

    <br><br>

    <div class="figure-container">
      <figure class="content">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL logo">
        <figcaption>PostgreSQL</figcaption>
      </figure>

      <figure class="content">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="HTML logo">
        <figcaption>HTML</figcaption>
      </figure>

      <figure class="content">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS logo">
        <figcaption>CSS</figcaption>
      </figure>

      <figure class="content">
        <img src="https://icon.icepanel.io/Technology/svg/Java.svg" alt="Java logo">
        <figcaption>Java</figcaption>
      </figure>

      <figure class="content">
        <img src="/images/javascript.png" alt="JavaScript logo">
        <figcaption>JavaScript</figcaption>
      </figure>

      <figure class="content">
        <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg" alt="Git logo">
        <figcaption>Git</figcaption>
      </figure>

      <figure class="content">
        <img src="https://www.svgrepo.com/show/394174/github.svg" alt="GitHub logo">
        <figcaption>GitHub</figcaption>
      </figure>
    </div>
  </main>
</template>
