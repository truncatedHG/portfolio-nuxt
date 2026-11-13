<script setup lang="ts">
const title = "Tech Stack | Aldrian Diaz"
const description = "Discover the technologies Aldrian Diaz is learning and working with: PostgreSQL, HTML, CSS, Java, JavaScript, Git, and GitHub."

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
    <TechStackSection />
  </div>
</template>
