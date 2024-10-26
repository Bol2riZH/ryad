<script setup>
  defineProps({
    src: String,
    alt: String,
  });
</script>

<template>
  <NuxtImg :src="src" :alt="alt" class="rounded mx-auto p-8" />
</template>
