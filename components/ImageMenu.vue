<script setup>
  defineProps({
    src: String,
    alt: String,
  });
</script>

<template>
  <div class="my-8 flex justify-center rounded">
    <NuxtImg :src="src" :alt="alt" class="rounded" />
  </div>
</template>
