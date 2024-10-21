<template>
  <div>
    <Header />
    <div class="flex flex-col min-h-screen">
      <main class="flex-grow">
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</template>
