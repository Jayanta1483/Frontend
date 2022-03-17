<template>
  <router-view v-slot="{ Component }">
    <transition name="router" mode="out-in">
     <component :is="Component"></component>
     </transition>
  </router-view>
</template>

<script setup>
import './css/main.css'
</script>

<style>
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  top: 0;left: 0;right: 0;bottom: 0;
}

.router-enter-from{
  opacity: 0;
  transform: translateX(150px);
}

.router-leave-to{
  opacity: 0;
  transform: translateX(-150px);
}

.router-enter-active{
  transition: all 0.4s ease-out;
}

.router-leave-active{
  transition: all 0.4s ease-in;
}

</style>
