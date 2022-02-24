<template>

<div class="container">
<Navbar/>
<!-- In the router-view tag display the matched component -->
  <router-view />
  </div>
</template>
<script>
import Navbar  from "./components/Navbar.vue";
export default {
  components : {
      Navbar
  }
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 100%;
  margin: 0;
  color: #555;
  position: absolute;
  top: 0; left: 0;right: 0;
  bottom: 0;
}

html{
  font-size: 62.5%;
}

body{
  margin: 0;
  padding: 0;
  overflow-y: hidden;
}

a{
  text-decoration: none;
}


.container{
  width: 78.5%;
  margin-top: 4.5rem;
  margin-inline: auto;
}
</style>
