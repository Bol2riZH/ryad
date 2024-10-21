<template>
  <footer class="bg-black text-white static flex justify-between gap-8 p-8">
    <Logo />
    <div class="flex flex-col gap-4">
      <p>Patong beach, Phuket, Thailand</p>
      <p>092 753 3485</p>
      <div class="flex gap-4">
        <a href="https://www.google.com" target="_blank">
          <font-awesome-icon :icon="['fab', 'google']" class="hover:scale-110 transition-all duration-300 h-8 w-8" />
        </a>
        <a href="https://www.snapchat.com" target="_blank">
          <font-awesome-icon :icon="['fab', 'snapchat']" class="hover:scale-110 transition-all duration-300 h-8 w-8" />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <font-awesome-icon :icon="['fab', 'facebook']" class="hover:scale-110 transition-all duration-300 h-8 w-8" />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram']" class="hover:scale-110 transition-all duration-300 h-8 w-8" />
        </a>
      </div>
    </div>
  </footer>
</template>
