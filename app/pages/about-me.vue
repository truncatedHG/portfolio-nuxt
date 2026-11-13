<script setup lang="ts">
const title = "About Me | Aldrian Diaz"
const description = "Meet Aldrian Diaz, an IT student at St. Dominic College of Asia. Learn about his interests in databases, networking, computers, and photography."

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
    <AboutBiography />
  </div>
</template>
