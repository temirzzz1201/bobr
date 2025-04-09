<template>
  <div class="layout flex flex-col min-h-screen">
    <AppHeader class="mb-16" />

    <Head>
      <title>{{ seo.title }}</title>
      <meta name="description" :content="seo.description" />
      <meta name="keywords" :content="seo.keywords" />
      <meta property="og:title" :content="seo.title" />
      <meta property="og:description" :content="seo.description" />
      <meta property="og:type" content="website" />
      <meta property="og:url" :content="seo.url" />
      <meta property="og:image" :content="seo.image" />
    </Head>

    <main class="container px-2 md:px-8 lg:px-2 mx-auto flex-1 mb-22">
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
  url: `https://bobr-roan.vercel.app${route.path}`,
  image: 'https://bobr-roan.vercel.app/for-social.png', 
})
</script>
