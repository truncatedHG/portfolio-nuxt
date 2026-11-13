import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/styles.css'],
  runtimeConfig: {
    public: {
      // Set NUXT_PUBLIC_SITE_URL to the production origin when deploying.
      siteUrl: '',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
