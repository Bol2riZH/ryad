<script setup lang="ts">
  useSeoMeta({
    title: 'Ryad Shisha Hookah Lounge',
    ogTitle: 'Ryad Shisha Hookah Lounge',
    description: 'Experience pure bliss, indulge a wide variety of high-quality tobacco',
    ogDescription: 'Experience pure bliss, indulge a wide variety of high-quality tobacco',
    ogImage: 'https://ryadshisha.com/img/hero/leon-kohle-JzxOS6RcnJ0-unsplash.jpg',
    ogUrl: 'https://ryadshisha.com',
  });
</script>

<template>
  <Hero />
  <SectionPart1 />
  <SectionPart2 />
  <Map />
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.25s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(0.7rem);
  }
</style>
