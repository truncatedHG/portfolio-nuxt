<script setup lang="ts">
defineProps<{ name: string; image: string; alt: string }>()
</script>

<template>
<figure class="content">
    <img :src="image" :alt="alt">
    <figcaption>{{ name }}</figcaption>
  </figure>
</template>
