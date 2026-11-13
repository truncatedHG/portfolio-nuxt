<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <header class="content mb-10 max-w-2xl sm:mb-14">
    <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{{ title }}</h1>
  </header>
</template>
