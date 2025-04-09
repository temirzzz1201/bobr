<template>
  <section class="max-w-4xl mx-auto px-4 py-12 bg-[#f9fafb]">
    <h1 class="text-4xl font-bold text-center text-grey-800 mb-8">О нас</h1>

    <p class="mb-6 text-lg text-gray-800 leading-relaxed">
      <strong>«ДЕСНИЦА ДОБРА»</strong> — это проект, созданный для помощи людям, оказавшимся в трудной жизненной ситуации.
      Мы предоставляем бесплатное проживание, питание и помогаем с трудоустройством на работу с ежедневной оплатой.
    </p>

    <p class="mb-6 text-lg text-gray-700 leading-relaxed">
      Наша цель — дать людям возможность восстановиться, встать на ноги и начать новую жизнь с чистого листа. Мы верим,
      что каждый заслуживает второго шанса, и создаём условия, в которых это возможно.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4">Что мы предлагаем:</h2>
    <ul class="list-disc list-inside text-gray-800 text-lg space-y-2">
      <li>Бесплатное проживание в уютных и чистых домах</li>
      <li>Горячее питание три раза в день</li>
      <li>Трудоустройство с ежедневной выплатой</li>
      <li>Психологическая поддержка и помощь в адаптации</li>
      <li>Доброжелательное и уважительное отношение</li>
    </ul>

    <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4">Кто может к нам обратиться:</h2>
    <p class="text-lg text-gray-800 leading-relaxed mb-6">
      Мы открыты для всех, кто нуждается в помощи. Без ограничений по возрасту, полу или вероисповеданию.
      Главное — ваше желание изменить свою жизнь.
    </p>

    <div class="mt-12 text-center">
      <NuxtLink
        to="/contacts"
        class="bg-blue-700 hover:bg-blue-800 text-white text-lg font-medium py-3 px-6 rounded-lg transition"
      >
        Связаться с нами
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'О нас – ДЕСНИЦА ДОБРА',
  description: 'Мы — благотворительная организация, предоставляющая временное жильё и работу людям, оказавшимся в трудной жизненной ситуации.',
  keywords: 'о нас, жильё, работа, помощь, десница добра, краснодар',
})
</script>

