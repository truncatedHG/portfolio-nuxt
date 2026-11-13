<script setup lang="ts">
import anime from 'animejs'
import { nextTick, onBeforeUnmount, onMounted, watch } from 'vue'

const route = useRoute()
const config = useRuntimeConfig()
const requestUrl = useRequestURL()
// A configured origin keeps canonical URLs stable behind deployment proxies.
const siteOrigin = new URL(config.public.siteUrl || requestUrl.origin).origin
const canonicalUrl = computed(() => new URL(route.path, siteOrigin).href)
const previewImage = new URL('/images/aldrian.JPEG', siteOrigin).href

useHead({
  htmlAttrs: { lang: 'en', 'data-theme': 'portfolio' },
  meta: [
    { charset: 'UTF-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
  ],
  link: [
    { rel: 'canonical', href: () => canonicalUrl.value },
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

useSeoMeta({
  author: 'Aldrian Diaz',
  ogSiteName: 'Aldrian Diaz Portfolio',
  ogType: 'website',
  ogLocale: 'en_US',
  ogUrl: () => canonicalUrl.value,
  ogImage: previewImage,
  ogImageAlt: 'Portrait of Aldrian Diaz',
  twitterCard: 'summary',
  twitterImage: previewImage,
  twitterImageAlt: 'Portrait of Aldrian Diaz',
  themeColor: '#8e43a1',
})

function animatePage() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  anime({
    targets: '.title',
    translateY: [24, 0],
    opacity: [0, 1],
    duration: 700,
    delay: 100,
    easing: 'easeOutCubic',
  })

  anime({
    targets: '.navbar-item',
    translateY: [-20, 0],
    opacity: [0, 1],
    duration: 700,
    delay: anime.stagger(50),
    easing: 'easeOutCubic',
  })

  anime({
    targets: '.name',
    translateY: [24, 0],
    opacity: [0, 1],
    duration: 700,
    delay: anime.stagger(70),
    easing: 'easeOutCubic',
  })

  anime({
    targets: '.content',
    translateY: [24, 0],
    opacity: [0, 1],
    duration: 700,
    delay: anime.stagger(50),
    easing: 'easeOutCubic',
  })
}

function animateNavbarItem(event: Event, translateY: number) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (!(event.target instanceof Element)) return

  const item = event.target.closest('.navbar-item')
  if (!item) return

  if (event.relatedTarget instanceof Node && item.contains(event.relatedTarget)) return

  anime.remove(item)
  anime({
    targets: item,
    translateY,
    duration: 300,
    easing: 'easeOutExpo',
  })
}

function onNavbarPointerOver(event: Event) {
  animateNavbarItem(event, -5)
}

function onNavbarPointerOut(event: Event) {
  animateNavbarItem(event, 0)
}

onMounted(() => {
  document.addEventListener('pointerover', onNavbarPointerOver)
  document.addEventListener('pointerout', onNavbarPointerOut)
  animatePage()
})

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    animatePage()
  },
)

onBeforeUnmount(() => {
  document.removeEventListener('pointerover', onNavbarPointerOver)
  document.removeEventListener('pointerout', onNavbarPointerOut)
  anime.remove('.navbar-item, .name, .content, .title')
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
