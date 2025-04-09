<template>
  <div class="layout flex flex-col min-h-screen">
    <AppHeader class="mb-16" />

    <Head>
      <title>{{ seo.title }}</title>
      <meta name="description" :content="seo.description" />
      <meta name="keywords" :content="seo.keywords" />

      <!-- Open Graph -->
      <meta property="og:title" :content="seo.title" />
      <meta property="og:description" :content="seo.description" />
      <meta property="og:type" content="website" />
      <meta property="og:url" :content="seo.url" />
      <meta property="og:image" :content="seo.image" />

    </Head>

    <main class="container mx-auto flex-1 mb-22">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
const route = useRoute()

const seo = useSeoMeta({
  title: 'Десница Добра',
  description: 'Некоммерческая организация «Десница Добра» оказывает помощь нуждающимся: предоставляет жильё и помогает с работой в Краснодаре.',
  keywords: 'жильё, трудоустройство, помощь, Краснодар, десница добра, работа, приём людей',
  url: `https://рабочий-дом.краснодар${route.path}`,
  image: 'https://рабочий-дом.краснодар/for-social.jpg', 
})
</script>
