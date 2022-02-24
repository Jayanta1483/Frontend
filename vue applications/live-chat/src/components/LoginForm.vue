<template>
  <transition name="front-form" appear>
    <form class="chat-form" @submit.prevent="handleLoginSubmit">
      <input
        type="email"
        name="email"
        placeholder="Your Email..."
        v-model="userEmail" required
      /><span class="material-icons eye">
alternate_email
</span><br />
      <input
        :type="pwdTp"
        name="password"
        placeholder="Your Password..."
        v-model="userPassword" ref="pwd" required
      /><span v-if="!visibility" class="material-icons eye" @click="showPassword">
visibility_off
</span><span v-else class="material-icons eye" @click="showPassword">
visibility
</span><br />
      <div class="form-sub-btn-container">
        <button class="form-sub-btn">Login</button>
      </div>
    </form>
  </transition>
  <p class="err-msg">{{ error }}</p>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useLogin } from "../composables/useLogin.js";
import { watch, watchEffect } from "vue-demi";
import { vi } from "date-fns/locale";

const userEmail = ref("");
const userPassword = ref("");
const router = useRouter();
const { login, error } = useLogin();
const emit = defineEmits(["loginChat"]);


const visibility = ref(false)
const pwdTp = ref('password')

const handleLoginSubmit = async () => {
  await login(userEmail.value, userPassword.value);
  if (!error.value) {
    emit("loginChat");
  }
};



const showPassword = ()=>{
  visibility.value = !visibility.value
  pwdTp.value = (pwdTp.value === 'password') ? 'text' : 'password'
}


</script>

<style>
.chat-form {
  padding: 5rem;
  text-align: left;
  
}

.chat-form input {
  width: 100%;
  padding: 0.8rem 0;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  border: none;
  border-bottom: 2px solid rgb(7, 228, 154);
}

.chat-form input:focus {
  outline: none;
}

.eye{
  position: absolute;
  right: 5rem;
  color: rgba(0, 0, 0, 0.342);
  cursor: pointer;
}

.form-sub-btn-container {
  text-align: center;
}

.form-sub-btn {
  display: inline-block;
  padding: 8px 25px;
  margin-top: 50px;
  background-color: rgb(7, 228, 154);
  font-size: 1.3rem;
  letter-spacing: 3px;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  border-radius: 20px;
  position: relative;
  border: none;
  cursor: pointer;
}

.form-sub-btn:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgb(7, 228, 154);
  border-radius: 20px;
  z-index: -1;
  transition: 0.3s;
}

.form-sub-btn:hover::after {
  z-index: 1;
  transform: scale(1.5);
  opacity: 0;
}



.front-form-enter-from,
.front-form-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.front-form-enter-active,
.front-form-leave-active {
  transition: all 2s ease;
}

.err-msg{
  font-size: 1.4rem;
  color: red;
  text-align: center;
}
</style>