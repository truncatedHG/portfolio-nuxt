<script setup lang="ts">
const title = "Web Portfolio | Aldrian Diaz"
const description = "Explore the portfolio of Aldrian Diaz, an IT student and aspiring database administrator. Discover his background, certifications, and technology skills."

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
    <ProfileHero />
  </div>
</template>
