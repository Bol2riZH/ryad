<script setup>
  defineProps({
    title: String,
    description: String,
    ogTitle: String,
    ogDescription: String,
    ogImage: String,
    ogUrl: String,
  });
</script>

<template>
  <section class="bg-black px-8 py-24">
    <h2 class="text-white text-center text-lg font-bold text-pretty">
      Our dedicated team of shisha artisans will guide you through an enchanting journey.
    </h2>
    <p data-aos="fade-right" data-aos-delay="200" class="font-serif text-white text-center text-sm text-pretty mb-8">
      Every moment wil be infused with sophistication and pleasure.
    </p>
  </section>

  <NuxtImg src="img/hero/food-photographer-iUhNMzJnJSI-unsplash.jpg" alt="shisha" />
</template>
