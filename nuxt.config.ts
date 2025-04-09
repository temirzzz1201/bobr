export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/image",
  ],
  css: ["@/assets/styles/tailwind.css"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  components: {
    dirs: [
      {
        path: "~/components/global",
        global: true,
      },
      "~/components",
    ],
  },
  head: {
    script: [
      {
        hid: 'json-ld',
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ДЕСНИЦА ДОБРА",
          "url": "https://рабочий-дом.москва",
          "logo": "https://example.com/logo.png",
          "sameAs": [
            "https://www.facebook.com/yourpage",
            "https://twitter.com/yourpage"
          ]
        })
      }
    ]
  }
});
