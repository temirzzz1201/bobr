export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
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
  ssr: false, 
  nitro: {
    preset: 'static',
  },
});
