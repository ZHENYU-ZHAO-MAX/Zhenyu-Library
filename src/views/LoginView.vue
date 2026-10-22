<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')

const router = useRouter()

const login = () => {
  if (username.value === 'admin' &&
      password.value === '123456') {

    localStorage.setItem('isAuthenticated', 'true')

    router.push('/about')
  } else {
    error.value = 'Invalid username or password'
  }
}
</script>

<template>
  <div class="container mt-4">

    <h2>Login</h2>

    <input
      class="form-control mb-2"
      placeholder="Username"
      v-model="username"
    >

    <input
      type="password"
      class="form-control mb-2"
      placeholder="Password"
      v-model="password"
    >

    <button class="btn btn-primary" @click="login">
      Login
    </button>

    <p class="text-danger mt-2" v-if="error">
      {{ error }}
    </p>

  </div>
</template>