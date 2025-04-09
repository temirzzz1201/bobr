<template>
  <header class="bg-[#e6f0f3] shadow-md py-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-4">
      <div>
        <NuxtLink to="/">
          <img class="w-26 h-14" src="/logo.png" alt="Десница добра" />
        </NuxtLink>
      </div>

      <nav class="hidden md:flex gap-8">
        <NuxtLink
          v-for="link in store.navLinks"
          :key="link.id"
          :to="link.to"
          class="text-[#4a6b7d] hover:text-[#2c3e50] transition-all duration-300"
        >
          {{ link.name }}
        </NuxtLink>
        <p class="text-[#4a6b7d] hover:text-[#2c3e50] transition-all duration-300">Телефон <a href="tel:+7 999 00 00 0">+ 7 (999) 000 00 01</a></p>
      </nav>

      <div @click="toggleMenu" class="md:hidden">
        <div class="w-6 h-1 bg-[#4a6b7d] mb-2"></div>
        <div class="w-6 h-1 bg-[#4a6b7d] mb-2"></div>
        <div class="w-6 h-1 bg-[#4a6b7d]"></div>
      </div>
    </div>

    <div
      v-if="isMenuOpen"
      class="md:hidden absolute top-0 left-0 w-full bg-[#e6f0f3] pt-16 px-4 pb-4 transition-all transform ease-in-out duration-300"
    >
      <button
        @click="toggleMenu"
        class="absolute top-4 right-4 text-[#4a6b7d] text-2xl"
      >
        &times; 
      </button>
      <nav class="flex flex-col items-center gap-6">
        <NuxtLink
          v-for="link in store.navLinks"
          :key="link.id"
          :to="link.to"
          @click="toggleMenu"
          class="text-[#4a6b7d] hover:text-[#2c3e50] transition-all duration-300"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useGeneralStore } from '@/stores/mainStore'
import { ref } from 'vue'

const store = useGeneralStore()

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideOut {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
