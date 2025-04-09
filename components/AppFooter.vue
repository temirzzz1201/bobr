<template>
  <footer class="bg-[#e6f0f3] shadow-md mt-12 py-8 text-[#4a6b7d]">
    <div
      class="container mx-auto grid gap-10 md:grid-cols-3 grid-cols-1 px-4"
    >
      <div class="flex flex-col items-center md:items-start text-center md:text-left">
        <h3 class="text-lg font-semibold mb-4 relative inline-block after:block after:w-full after:h-0.5 after:bg-[#a8c4d0] after:mt-1">
          Десница добра
        </h3>
        <ul class="space-y-2">
          <li v-for="link in store.navLinks" :key="link.id">
            <NuxtLink
              :to="link.to"
              class="hover:text-[#2c3e50] transition-all duration-300"
            >
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="flex flex-col items-center md:items-start text-center md:text-left">
        <h3 class="text-lg font-semibold mb-4 relative inline-block after:block after:w-full after:h-0.5 after:bg-[#a8c4d0] after:mt-1">
          Контакты
        </h3>
        <ul class="space-y-2 text-sm">
          <li><span class="font-medium">Email:</span> info@example.com</li>
          <li><span class="font-medium">Телефон:</span> +7 (123) 456-78-90</li>
          <li>
            <span class="font-medium">Адрес:</span> г. Москва, ул. Примерная, 123
          </li>
        </ul>
      </div>

      <div class="flex flex-col items-center md:items-start text-center md:text-left">
        <h3 class="text-lg font-semibold mb-4 relative inline-block after:block after:w-full after:h-0.5 after:bg-[#a8c4d0] after:mt-1">
          Соцсети
        </h3>
        <div class="flex gap-4 justify-center md:justify-start">
          <NuxtLink
            v-for="social in store.socialLinks"
            :key="social.id"
            :href="social.href || '#'"
            class="w-10 h-10 rounded-full bg-[#d4e1e7] flex items-center justify-center hover:bg-[#a8c4d0] transition-all duration-300"
            :title="social.name"
          >
            <img :src="social.src" class="w-5 h-5 bg-center bg-no-repeat bg-contain"></img>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="text-center text-sm border-t border-[#d4e1e7] mt-8 pt-4 px-4">
      © 2025 ДЕСНИЦА ДОБРА. Все права защищены.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useGeneralStore } from '@/stores/mainStore'
const store = useGeneralStore()
</script>
