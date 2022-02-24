<template>
  <div class="profile">
    <div class="profile-image"></div>
    <nav class="main-nav">
      <ul>
        <li class="profile-name">{{ userName }}</li>
        <li class="profile-email"><span>E-mail :</span> {{ userEmail }}</li>
        <li><button @click="userLogOut" class="logout-btn">Logout</button></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { signOut } from "@firebase/auth";
import { watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useUserProfile } from "../composables/useUserProfile.js";
import { auth } from "../firebase/config.js";

const { userName, userEmail } = useUserProfile();
const router = useRouter();

const userLogOut = () => {
  signOut(auth);
  router.push("/");
};
</script>

<style scoped>
.main-nav li {
  text-align: center;
  margin: 1rem;
}

.profile-name{
  font-size: 1.6rem;
  text-transform: capitalize;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.692);
}

.profile-email{
  font-size: 1.2rem;
  font-weight: 700;
}

.profile-email span{
  font-weight: 700;
  color: rgba(0, 0, 0, 0.39);
}

.logout-btn{
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

.logout-btn::after{
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

.logout-btn:hover::after{
  z-index: 1;
  transform: scale(1.5);
  opacity: 0;
}
</style>