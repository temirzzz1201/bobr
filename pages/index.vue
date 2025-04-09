<template>
    <section class="bg-[#e6f0f3] text-gray-800 py-16">
      <div class="container mx-auto text-center">
        <h1 class="text-3xl font-bold mb-4">Добро пожаловать в «ДЕСНИЦА ДОБРА»</h1>
        <p class="text-lg mb-6 max-w-2xl mx-auto">Предоставляем бесплатное жилье, питание и работу с ежедневной оплатой для нуждающихся в Краснодаре.</p>
        <a href="#map" class="bg-[#f9d89c] text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-[#f5cd80] transition">Мы на карте</a>
      </div>
    </section>

    <section class="py-16 bg-[#fefefe]">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Мы предлагаем</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div class="bg-white p-6 rounded-2xl shadow text-center">
            <h3 class="text-xl font-semibold text-[#425466] mb-3">Бесплатное проживание</h3>
            <p class="text-gray-600">Мы предоставляем временное жильё для тех, кто оказался в трудной жизненной ситуации. Уютные комнаты и безопасная атмосфера.</p>
          </div>

          <div class="bg-white p-6 rounded-2xl shadow text-center">
            <h3 class="text-xl font-semibold text-[#425466] mb-3">Бесплатное питание</h3>
            <p class="text-gray-600">Каждый день мы обеспечиваем наших жильцов полноценным питанием, чтобы они могли сосредоточиться на работе и восстановлении.</p>
          </div>

          <div class="bg-white p-6 rounded-2xl shadow text-center">
            <h3 class="text-xl font-semibold text-[#425466] mb-3">Работа с ежедневной оплатой</h3>
            <p class="text-gray-600">Мы предлагаем работу с ежедневной оплатой. Прозрачные условия и регулярные выплаты обеспечат стабильность для каждого.</p>
          </div>
      </div>
    </section>

    <section class="py-16 bg-[#f3f7fa]">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-12 text-gray-800">Как это работает?</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div class="bg-white p-6 rounded-2xl shadow">
            <h3 class="text-xl font-semibold text-[#425466] mb-3">Шаг 1: Обращение к нам</h3>
            <p class="text-gray-600">Свяжитесь с нами через телефон или мессенджеры, чтобы рассказать о вашей ситуации и потребностях.</p>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow">
            <h3 class="text-xl font-semibold text-[#425466] mb-3">Шаг 2: Проживание и работа</h3>
            <p class="text-gray-600">После одобрения мы предоставим вам жильё и подберём подходящую работу.</p>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow">
            <h3 class="text-xl font-semibold text-[#425466] mb-3">Шаг 3: Постоянная поддержка</h3>
            <p class="text-gray-600">Наша команда всегда рядом — мы помогаем на всех этапах адаптации.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="map" class="py-16 bg-white">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Где мы находимся</h2>
        <p class="text-gray-600 mb-8 max-w-xl mx-auto">Наш центр расположен в Москве. Ниже вы можете увидеть точное местоположение на карте.</p>

        <div class="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <AppMap :coordsList="store.addresses" :zoom="14" />
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import { useGeneralStore } from '@/stores/mainStore'
const store = useGeneralStore()
</script>