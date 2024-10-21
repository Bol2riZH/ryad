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
  <section>
    <div class="py-24 px-8 bg-black">
      <h2 class="text-2xl font-bold text-center text-white font-title mb-8">RYAD SHISHA HOOKAH LOUNGE</h2>
      <p class="text-lg font-bold text-center text-white">
        Indulge in an extraordinary experience at Phuket’s premier Shisha Bar.
      </p>
      <p data-aos="fade-right" class="font-serif text-white text-center text-sm text-pretty mb-8">
        Prepare to be captivated by a world of exquisite flavors and unparalleled relaxation. Immerse yourself in a
        haven of luxury as you savor our extensive selection of high quality and premium Hookah tobacco. Each puff
        transports you to a realm of pure bliss, where time slows down, and worries fade away.
      </p>
      <div class="mx-auto h-10 w-3/5 sm:w-1/3">
        <Button text="Our tobaccos" />
      </div>
    </div>
    <NuxtImg src="img/hero/mohamadreza-azhdari-kwLiF3l9IFs-unsplash.jpg" alt="shisha" class="rounded" />
  </section>
</template>
