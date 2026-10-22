<template>
  <h1>Sign in</h1>

  <p>
    <input
      type="text"
      placeholder="Email"
      v-model="email"
    />
  </p>

  <p>
    <input
      type="password"
      placeholder="Password"
      v-model="password"
    />
  </p>

  <p>
    <button @click="signin">
      Sign in via Firebase
    </button>
  </p>
</template>

<script setup>
import { ref } from "vue"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router"
import { app } from "../firebase/init";

const email = ref("")
const password = ref("")
const router = useRouter()
const auth = getAuth(app)

const signin = () => {
  signInWithEmailAndPassword(
    getAuth(),
    email.value,
    password.value
  )
    .then((data) => {

      if (email.value === "admin@test.com") {

localStorage.setItem("role", "admin")

} else {

localStorage.setItem("role", "user")

}

      console.log("Firebase Register Successful!")
      router.push("/")
      console.log(auth.currentUser) // To check the current User signed in

      router.push("/dashboard")
    })
    .catch((error) => {
      console.log(error.code)
    })
}
</script>