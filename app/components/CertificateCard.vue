<script setup lang="ts">
import type { Certificate } from '~/types/certificate'

defineProps<{ certificate: Certificate }>()
const emit = defineEmits<{ select: [certificate: Certificate] }>()
</script>

<template>
<figure class="content">
          <button
            class="image"
            type="button"
            :aria-label="`View ${certificate.title} certificate`"
            @click="emit('select', certificate)"
          >
            <img class="certificate" :src="certificate.preview" :alt="certificate.alt">
          </button>

          <figcaption>
            <a class="figText" :href="certificate.link" target="_blank" rel="noopener noreferrer">
              {{ certificate.title }}
            </a>
          </figcaption>
        </figure>
</template>
