<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
 
  <NavBar />

  <main>
    <div class="home-container">
    <h1>Home Page </h1>
    </div>
  </main>

  <Footer />

</template>

<style scoped>
.home-container {
  padding-top: 80px; 
  min-height: calc(100vh - 80px);
  margin: 0 auto;
  max-width: 1400px;
  border-top: 2px solid #f0f0f0;
}
</style>