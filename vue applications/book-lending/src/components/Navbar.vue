<template>
  <nav class="main-nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'AddBook' }">Add Book</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
.main-nav {
  text-align: center;
}

.main-nav a {
  position: relative;
  margin-right: 1.6rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
}

.main-nav a::after {
  position: absolute;
  bottom: -12px;
  left: 0;
  right: 0;
  content: "";
  /* width: 0.625rem; */
  height: 0.3rem;
  border-radius: 5px;
  background-color: #fff;
  opacity: 0;
  transition: 0.7s all;
}

.main-nav a:hover {
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff;
}

.main-nav a:hover::after {
  bottom: -10px;
  opacity: 1;
}

.main-nav a.router-link-active {
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff;
}

.main-nav a.router-link-active::after {
  bottom: -10px;
  opacity: 1;
}
</style>