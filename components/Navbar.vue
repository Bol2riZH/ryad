<template>
  <nav>
    <NuxtLink to="/" class="nav-link" active-class="active-link">Home</NuxtLink>
    <NuxtLink to="/menu" class="nav-link" active-class="active-link">Menu</NuxtLink>
    <NuxtLink to="/contact" class="nav-link" active-class="active-link">Contact</NuxtLink>
  </nav>
</template>

<style scoped>
  .nav-link {
    position: relative;
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
    margin-right: 2rem;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    height: 1px;
    background: rgba(255, 255, 255, 0.5);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .nav-link::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: -4px;
    height: 1px;
    background: rgba(255, 255, 255, 0.5);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .nav-link:hover::after {
    transform: scaleX(1);
  }

  .nav-link:hover::before {
    transform: scaleX(1);
  }

  .active-link {
    color: #ff6766;
  }
</style>
