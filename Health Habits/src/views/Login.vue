<script setup> 
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = () => {
  if (!email.value || !password.value) {
    alert('Please enter email and password')
    return
  }

  // Temporary login logic
  router.push('/home')
}

const goToRegister = () => {
  router.push('/register')
}
</script>

<template>
  <div class="login-container">

    <!-- Logo Section (Temporarily Removed) -->
    <!--
    <div class="logo-section">
      <img src="@/assets/logo.png" alt="Healthy Habits Logo" class="logo" />
    </div>
    -->

    <!-- Login Card -->
    <div class="login-card">
      <h2>Welcome Back!</h2>

      <input
        type="text"
        placeholder="Username or Email"
        v-model="email"
      />

      <input
        type="password"
        placeholder="Password"
        v-model="password"
      />

      <button class="login-btn" @click="handleLogin">
        Login
      </button>

      <hr />

      <p>Don’t have an account?</p>

      <button class="signup-btn" @click="goToRegister">
        Sign Up
      </button>

    </div>
  </div>
</template>

<style scoped>
.login-container {
  min-height: 100vh;

  /* Background temporarily removed */
  /*
  background: url('@/assets/food-bg.jpg') no-repeat center center;
  background-size: cover;
  */

  background: #f4f4f4;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Logo styles temporarily disabled */
/*
.logo-section {
  margin-bottom: 20px;
}

.logo {
  width: 220px;
}
*/

.login-card {
  background: rgba(255, 255, 255, 0.95);
  padding: 40px;
  border-radius: 25px;
  width: 380px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

.login-card h2 {
  margin-bottom: 25px;
  color: #2E7D32;
}

input {
  width: 100%;
  padding: 14px;
  margin-bottom: 15px;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-size: 15px;
}

.login-btn {
  width: 100%;
  padding: 14px;
  background: #2E7D32;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.login-btn:hover {
  background: #256628;
}

hr {
  margin: 25px 0;
  border: none;
  height: 1px;
  background: #ddd;
}

.signup-btn {
  width: 100%;
  padding: 14px;
  background: #F57C00;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.signup-btn:hover {
  background: #d96d00;
}
</style>
