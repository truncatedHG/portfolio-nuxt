import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/styles.css'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap',
        },
      ],
    },
  },
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
