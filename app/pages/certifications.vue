<script setup lang="ts">
const title = "Certifications | Aldrian Diaz"
const description = "Browse Aldrian Diaz's certifications in Python, networking, Microsoft Word, Microsoft Excel, and C, with certificate previews and Credly credential links."

useHead({ title })

useSeoMeta({
  description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
})
</script>

<template>
  <div>
    <CertificateGallery />
  </div>
</template>
