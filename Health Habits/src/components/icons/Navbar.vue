<script setup>
import { useCartStore } from '../stores/cartStore'

const cartStore = useCartStore()
</script>

<template>
  <nav style="padding: 20px; background: #2E7D32; color: white;">
    🥑 Healthy Habits |
    Cart ({{ cartStore.cartCount }})
  </nav>
</template>

<style scoped>
nav {
  font-weight: bold;
}
</style>
