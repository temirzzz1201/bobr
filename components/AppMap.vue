<template>
  <div class="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
    <iframe
      :src="mapSrc"
      width="100%"
      height="100%"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Coords {
  lat: number
  lng: number
}

const props = defineProps<{
  coordsList: Coords[]
  zoom?: number
}>()

const mapSrc = computed(() => {
  const defaultZoom = props.zoom ?? 11
  const center = props.coordsList[0]
  const ll = `${center.lng},${center.lat}`
  const z = defaultZoom

  const pts = props.coordsList
    .map(coord => `${coord.lng},${coord.lat},pm2rdm`)
    .join('~')

  return `https://yandex.ru/map-widget/v1/?ll=${ll}&z=${z}&pt=${pts}`
})
</script>
