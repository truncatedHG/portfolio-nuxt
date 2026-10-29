<script setup lang="ts">
import anime from 'animejs'
import { nextTick, ref } from 'vue'

interface Certificate {
  image: string
  preview: string
  alt: string
  title: string
  link: string
}

const isMenuOpen = ref(false)
const dialog = ref<HTMLDialogElement | null>(null)
const selectedCertificate = ref<Certificate | null>(null)

const certificates: Certificate[] = [
  {
    image: '/images/python-certificate.jpg',
    preview: '/images/python-essentials.png',
    alt: 'Python Essentials Certificate',
    title: 'Python Essentials',
    link: 'https://www.credly.com/badges/5b4ed36d-0840-46e6-8f10-db48d802ade8/public_url',
  },
  {
    image: '/images/networking-certificate.jpg',
    preview: '/images/networking-basics.png',
    alt: 'Networking Basics Certificate',
    title: 'Networking Basics',
    link: 'https://www.credly.com/badges/7a3a72de-71d7-4fd7-bf17-36c9a3fc52de/public_url',
  },
  {
    image: '/images/msword-certificate.jpg',
    preview: '/images/msword-specialist.png',
    alt: 'Microsoft Word 2019 Specialist Certificate',
    title: 'Microsoft Word Specialist',
    link: 'https://www.credly.com/badges/10554536-90af-4445-bf61-2d4dbfcda45a/public_url',
  },
  {
    image: '/images/excel-certificate.jpg',
    preview: '/images/msexcel-specialist.png',
    alt: 'Microsoft Excel Specialist Certificate',
    title: 'Microsoft Excel Specialist',
    link: 'https://www.credly.com/badges/5cb94b82-d417-496b-ae8c-d1c2a088331a/public_url',
  },
  {
    image: '/images/cessentials-certificate.jpg',
    preview: '/images/cessentials.png',
    alt: 'C Essentials Certificate',
    title: 'C Essentials',
    link: 'https://www.credly.com/badges/4289682b-90ef-4001-b34d-859bfbfc6e59/public_url',
  },
]

async function openCertificate(certificate: Certificate) {
  selectedCertificate.value = certificate
  await nextTick()
  dialog.value?.showModal()

  if (dialog.value) {
    anime.remove(dialog.value)
    anime({
      targets: dialog.value,
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 300,
      easing: 'easeOutBack',
    })
  }
}

function closeCertificate() {
  if (!dialog.value?.open) return

  anime.remove(dialog.value)
  anime({
    targets: dialog.value,
    opacity: [1, 0],
    scale: [1, 0.8],
    duration: 200,
    easing: 'easeInQuad',
    complete: () => dialog.value?.close(),
  })
}

useHead({
  title: 'Certifications | Aldrian Diaz',
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

    <h1 class="is-size-1 has-text-centered content">Certifications</h1>

    <div class="has-text-centered">
      <div class="figure-container">
        <figure v-for="certificate in certificates" :key="certificate.title" class="content">
          <button
            class="image"
            type="button"
            :aria-label="`View ${certificate.title} certificate`"
            @click="openCertificate(certificate)"
          >
            <img class="certificate" :src="certificate.preview" :alt="certificate.alt">
          </button>

          <figcaption>
            <a class="figText" :href="certificate.link" target="_blank" rel="noopener noreferrer">
              {{ certificate.title }}
            </a>
          </figcaption>
        </figure>
      </div>
    </div>

    <dialog
      ref="dialog"
      @click.self="closeCertificate"
      @cancel.prevent="closeCertificate"
      @close="selectedCertificate = null"
    >
      <button id="close-btn" type="button" aria-label="Close certificate" @click="closeCertificate">
        ×
      </button>
      <img
        v-if="selectedCertificate"
        id="dialog-img"
        :src="selectedCertificate.image"
        :alt="selectedCertificate.alt"
      >
      <p v-if="selectedCertificate" id="dialog-caption">
        {{ selectedCertificate.title }}
      </p>
    </dialog>
  </main>
</template>
