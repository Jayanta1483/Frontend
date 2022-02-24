<template>
  <div class="welcome-form-container">
    <div class="form-image"></div>
    <div v-if="isSignup" class="signup-form">
      <SignUp @signupChat="toChat" />
      <p class="login-option">
        Already have an account ?
        <span @click="isSignup = !isSignup">Log In</span>
      </p>
    </div>
    <div class="login-form" v-else>
      <LogIn @loginChat="toChat" />
      <p class="signup-option">
        Don't have an account yet ?
        <span @click="isSignup = !isSignup">Sign Up</span>
      </p>
      <p class="or">------------------------- OR ----------------------------</p>
      <div class="google-login-btn-container">
        <button class="google-login-btn" @click="googleLoginUser">
          Continue with Google
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import SignUp from "../components/SignUp.vue";
import LogIn from "../components/LoginForm.vue";
import { ref } from "@vue/reactivity";
import { useLogin } from "../composables/useLogin.js";
import { useRouter } from "vue-router";
import { googleAuth } from "../composables/useGoogleAuth.js";

let isSignup = ref(false);
const router = useRouter();
const toChat = () => router.push("/chat");
const { googleLogin, googleError } = googleAuth();

const googleLoginUser = async () => {
  await googleLogin();
  router.push("/chat");
};
</script>

<style scoped>
.welcome-form-container {
  position: absolute;
  display: grid;
  grid-template-columns: 55% 45%;
  top: 15%;
  left: 10%;
  width: 100rem;
  height: 65rem;
  border: none;
  border-radius: 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.form-image {
  height: 100%;
  background: url("../assets/client-3-resized.jpg") no-repeat;
  background-size: cover;
  background-position: -25rem center;
  border-radius: 2rem 0 0 2rem;
}

.signup-form,
.login-form {
  width: 100%;
  padding-top: 15rem;
  background-color: #fff;
  border-radius: 0 2rem 2rem 0;
}


.signup-option,
.login-option {
  text-align: center;
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.363);
}

.signup-option span,
.login-option span {
  color: rgb(7, 228, 154);
  font-weight: 600;
  cursor: pointer;
}

.or{
  margin-block: 2.5rem;
  text-align: center;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.342);
}

.google-login-btn-container{
  text-align: center;
}

.google-login-btn{
  /* margin-top: 1rem; */
  padding: 0.8rem 5rem;
  font-size: 1.6rem;
  font-weight: 800;
  border: 1px solid black;
  border: none;
  background-color: rgb(7, 228, 154);
  color: #fff;
  cursor: pointer;
  
}
</style>