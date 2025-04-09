<template>
  <section>
    <h1>Отчетность</h1>
    <p>
      {{ data.dghdfg }}
    </p>
  </section>
</template>

<script setup lang="ts">
const { data, error } = await useNuxtApp().$fetch("/api/documents");

const pageData = computed(() => data);
</script>
