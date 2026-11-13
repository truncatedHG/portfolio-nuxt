<script setup lang="ts">
import anime from 'animejs'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const tracks = ref<HTMLDivElement | null>(null)
let animation: ReturnType<typeof anime> | undefined
let preference: MediaQueryList | undefined

function syncMotion() {
  if (preference?.matches || document.hidden) animation?.pause()
  else animation?.play()
}

onMounted(() => {
  preference = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (tracks.value) {
    // One complete dash-and-gap cycle makes the loop seamless.
    animation = anime({
      targets: tracks.value,
      backgroundPositionX: ['0px', '72px'],
      duration: 2700,
      easing: 'linear',
      loop: true,
      autoplay: false,
    })
  }
  syncMotion()
  preference.addEventListener('change', syncMotion)
  document.addEventListener('visibilitychange', syncMotion)
})

onBeforeUnmount(() => {
  preference?.removeEventListener('change', syncMotion)
  document.removeEventListener('visibilitychange', syncMotion)
  animation?.pause()
  if (tracks.value) anime.remove(tracks.value)
})
</script>

<template>
  <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div ref="tracks" class="background-tracks" />
  </div>
</template>

<style scoped>
.background-tracks {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150vmax;
  height: 150vmax;
  transform: translate(-50%, -50%) rotate(-45deg);
  opacity: 0.1;
  background-image: repeating-linear-gradient(to right, var(--color-primary) 0 36px, transparent 36px 72px);
  mask-image: repeating-linear-gradient(to bottom, black 0 3px, transparent 3px 128px);
}
</style>
