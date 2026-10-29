<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

useHead({
  title: 'About Me | Aldrian Diaz',
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
      <h1 class="is-size-1 content">About Me</h1>

      <p class="is-size-4 name content">
        An IT student that is currently studying at St. Dominic College of Asia.
        I'm almost always sleep deprived and I do not even drink coffee often, I rawdog my entire life.
        My hobby outside of IT is photography, mostly street photography and ive been dabbling in abstract photography as well.
        I always like to travel but have no money, which is why I am here in this industry to make bags, just kidding.
        The only reason I am here is because I started with building computers and now im making my own website which is fun.
      </p>

      <br>

      <p class="is-size-4 name content">
        I aim to have a career in the database industry either as a data analyst or database administrator.
        This is where I take my niche and focus my energy on. I can also see myself being happy in the networking industry but it remains unclear on which job I would be satisfied with.
        If I do not land on any of those target careers I might just go back to studying and to find another degree, like mechanical engineering. Its been my second choice that is not IT related.
        There is still much time until I change my mind, but right now I am just starting to get the hang of it.
      </p>
    </div>
  </main>
</template>
