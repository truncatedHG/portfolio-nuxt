<script setup lang="ts">
defineProps<{ name: string; image: string; alt: string }>()
</script>

<template>
  <figure class="card content group m-0 items-center gap-6 rounded-2xl border border-primary/15 bg-white/30 px-5 py-9 transition-[background-color,box-shadow] duration-300 hover:bg-white/55 hover:shadow-lg hover:shadow-primary/5">
    <div class="grid h-24 w-24 place-items-center rounded-2xl bg-white/55 p-5"><img class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none" :src="image" :alt="alt" loading="lazy"></div>
    <figcaption class="text-center text-base font-semibold">{{ name }}</figcaption>
  </figure>
</template>
