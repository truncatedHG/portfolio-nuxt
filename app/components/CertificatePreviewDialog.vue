<script setup lang="ts">
import anime from 'animejs'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { nextTick, onBeforeUnmount, ref } from 'vue'
import type { Certificate } from '~/types/certificate'

const dialog = ref<HTMLDialogElement | null>(null)
const panel = ref<HTMLDivElement | null>(null)
const selectedCertificate = ref<Certificate | null>(null)

async function openCertificate(certificate: Certificate) {
  selectedCertificate.value = certificate
  await nextTick()
  dialog.value?.showModal()

  if (panel.value && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    anime.remove(panel.value)
    anime({
      targets: panel.value,
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 300,
      easing: 'easeOutBack',
    })
  }
}

function closeCertificate() {
  if (!dialog.value?.open) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    dialog.value.close()
    return
  }

  anime.remove(panel.value)
  anime({
    targets: panel.value,
    opacity: [1, 0],
    scale: [1, 0.8],
    duration: 200,
    easing: 'easeInQuad',
    complete: () => dialog.value?.close(),
  })
}

function onClose() {
  if (panel.value) anime.remove(panel.value)
  selectedCertificate.value = null
}

onBeforeUnmount(() => {
  if (panel.value) anime.remove(panel.value)
})

defineExpose({ open: openCertificate })
</script>

<template>
  <dialog
    ref="dialog"
    class="modal certificate-modal"
    aria-labelledby="dialog-caption"
    @click.self="closeCertificate"
    @cancel.prevent="closeCertificate"
    @close="onClose"
  >
    <div ref="panel" class="modal-box flex max-h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] max-w-[900px] flex-col items-center rounded-2xl border border-primary/15 p-4 text-center sm:p-6">
      <button class="btn btn-ghost btn-circle btn-sm ml-auto text-xl text-primary" type="button" aria-label="Close certificate" @click="closeCertificate">
        <XMarkIcon class="h-5 w-5" aria-hidden="true" />
      </button>
      <img
        v-if="selectedCertificate"
        class="max-h-[70vh] w-auto max-w-full object-contain"
        :src="selectedCertificate.image"
        :alt="selectedCertificate.alt"
      >
      <p v-if="selectedCertificate" id="dialog-caption" class="m-0 text-[0.95rem]">
        {{ selectedCertificate.title }}
      </p>
    </div>
  </dialog>
</template>
