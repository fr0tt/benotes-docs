export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@funken-studio/sitemap-nuxt-3'
    ],
    sitemap: {
        hostname: 'https://benotes.org',
    },
    // only available server-side
    runtimeConfig: {
    }
})