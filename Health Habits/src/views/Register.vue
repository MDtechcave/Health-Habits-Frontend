<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const subscription = ref('')
const errorMessage = ref('')

const router = useRouter()

const handleRegister = () => {
  if (!name.value || !email.value || !password.value || !confirmPassword.value || !subscription.value) {
    errorMessage.value = 'Please complete all fields.'
    return
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match.'
    return
  }

  alert('Registration successful! Please login.')
  router.push('/')
}
</script>

<template>
  <div class="auth-container">
    <div class="auth-card">
      <h2>Create Account</h2>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

      <input type="text" placeholder="Full Name" v-model="name" />
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="password" placeholder="Confirm Password" v-model="confirmPassword" />

      <div class="subscription-section">
        <h4>Select Subscription Plan</h4>

        <label>
          <input type="radio" value="3 meals/week" v-model="subscription" />
          3 Meals Per Week
        </label>

        <label>
          <input type="radio" value="5 meals/week" v-model="subscription" />
          5 Meals Per Week
        </label>

        <label>
          <input type="radio" value="7 meals/week" v-model="subscription" />
          7 Meals Per Week
        </label>
      </div>

      <button @click="handleRegister">
        Register
      </button>

      <p class="redirect">
        Already have an account?
        <router-link to="/">Login</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f6f5;
  padding: 20px;
}

.auth-card {
  background: white;
  padding: 40px;
  border-radius: 15px;
  width: 400px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.auth-card h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #2E7D32;
}

/* ONLY style text inputs */
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

/* Style radio buttons */
input[type="radio"] {
  accent-color: #2E7D32;
  margin-right: 6px;
}

/* Subscription section */
.subscription-section {
  margin: 15px 0;
}

.subscription-section h4 {
  margin-bottom: 10px;
}

.subscription-section label {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
  cursor: pointer;
}

button {
  width: 100%;
  padding: 12px;
  background: #2E7D32;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #F57C00;
}

.redirect {
  text-align: center;
  margin-top: 15px;
}

.error {
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
}
</style>
