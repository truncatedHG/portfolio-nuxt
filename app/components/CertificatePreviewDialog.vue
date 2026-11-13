<script setup lang="ts">
import anime from 'animejs'
import { nextTick, onBeforeUnmount, ref } from 'vue'
import type { Certificate } from '~/types/certificate'

const dialog = ref<HTMLDialogElement | null>(null)
const selectedCertificate = ref<Certificate | null>(null)

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

function onClose() {
  if (dialog.value) anime.remove(dialog.value)
  selectedCertificate.value = null
}

onBeforeUnmount(() => {
  if (dialog.value) anime.remove(dialog.value)
})

defineExpose({ open: openCertificate })
</script>

<template>
<dialog
      ref="dialog"
      @click.self="closeCertificate"
      @cancel.prevent="closeCertificate"
      @close="onClose"
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
</template>
