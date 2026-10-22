<template>
    <div>
        <h1>Dashboard</h1>

        <h2 v-if="role==='admin'">
            Welcome Admin
        </h2>

        <h2 v-else>
            Welcome User
        </h2>

        <button @click="logout">
            Logout
        </button>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { getAuth, signOut } from "firebase/auth"
import { useRouter } from "vue-router"

const role = ref(localStorage.getItem("role"))
const auth = getAuth()
const router = useRouter()

const logout = () => {
  signOut(auth)
    .then(() => {

      
      console.log("Current User:", auth.currentUser)

      localStorage.removeItem("role")

      
      router.push("/Firelogin")
    })
}
</script>
