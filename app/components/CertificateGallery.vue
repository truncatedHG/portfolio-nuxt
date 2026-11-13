<script setup lang="ts">
import { ref } from 'vue'
import type { Certificate } from '~/types/certificate'

const previewDialog = ref<{ open: (certificate: Certificate) => Promise<void> } | null>(null)

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
</script>

<template>
<h1 class="is-size-1 has-text-centered content">Certifications</h1>

    <div class="has-text-centered">
      <div class="figure-container">
        <CertificateCard
          v-for="certificate in certificates"
          :key="certificate.title"
          :certificate="certificate"
          @select="previewDialog?.open($event)"
        />
      </div>
    </div>

    <CertificatePreviewDialog ref="previewDialog" />
</template>
