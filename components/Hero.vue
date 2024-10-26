<template>
  <section class="hero-background bg-cover bg-center h-screen flex flex-col justify-center items-center px-8">
    <h1 class="text-white text-center mb-8">Experience pure bliss, indulge high-quality tobacco</h1>
    <h2 class="text-white">RYAD SHISHA HOOKAH LOUNGE</h2>
    <p class="text-white text-center mb-8">
      Immerse yourself in a haven of luxury as you savor our extensive selection of high quality and premium tobacco.
      Each puff transports you to a realm of pure bliss, where time slows down, and worries fade away.
    </p>
    <div class="mx-auto">
      <Button text="See our menu" />
    </div>
  </section>
</template>

<style scoped>
  .hero-background {
    background-image: url('/img/hero/leon-kohle-JzxOS6RcnJ0-unsplash.jpg');
    animation: backgroundTransition 5s infinite ease-in-out;
    background-blend-mode: darken;
  }

  h1,
  h2,
  p {
    text-shadow: -2px -2px 4px rgba(0, 0, 0, 0.9);
    animation: shadowTransition 5s infinite ease-in-out;
  }

  @keyframes backgroundTransition {
    0% {
      background-color: rgba(0, 0, 0, 0.5);
    }
    50% {
      background-color: rgba(255, 255, 255, 0.5);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  @keyframes shadowTransition {
    0% {
      text-shadow: -2px -2px 4px rgba(0, 0, 0, 0.9);
    }
    25% {
      text-shadow: -6px -6px 4px rgba(0, 0, 0, 0.9);
    }
    100% {
      text-shadow: -2px -2px 4px rgba(0, 0, 0, 0.9);
    }
  }
</style>
