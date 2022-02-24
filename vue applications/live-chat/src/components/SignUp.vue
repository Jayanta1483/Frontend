<template>
<transition name="front-form" appear>
  <form class="chat-form" @submit.prevent="handleSignupSubmit">
    <input type="text" name="username" placeholder="Your Name..." required v-model="userName"><br/>
    <input type="email" name="email" placeholder="Your Email..." required v-model="userEmail"><br/>
    <input type="password" name="password" placeholder="Your Password..." required v-model="userPassword"><br/>
    <div class="form-sub-btn-container">
       <button class="form-sub-btn">Register</button>
    </div>
  </form>
</transition>
<p class="err-msg">{{ error }}</p>
</template>

<script setup>
import { ref } from "@vue/reactivity"
import { useSignup } from "../composables/useSignup.js";



const userName = ref('')
const userEmail = ref('')
const userPassword = ref('')
const emit = defineEmits(['signupChat'])


const { signup, error, success } = useSignup()

const handleSignupSubmit = async () => {
   await signup(userEmail.value, userPassword.value, userName.value)
   emit('signupChat')
   
}
</script>

<style>

</style>