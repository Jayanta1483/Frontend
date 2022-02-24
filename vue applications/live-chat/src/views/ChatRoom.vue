<template>
  <div class="chat-room">
    <div class="chat-window">
      <transition name="msg-fade" appear>
      <div>
        <ChatWindow />
        
      </div>
      </transition>
      <transition name="msg-fade" appear>
      <div>
        <ChatForm />
      </div>
      </transition>
    </div>
    <transition name="msg-fade" appear>
    <div class="panel">
      <Navbar />
    </div>
    </transition>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import ChatForm from "../components/ChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";
</script>

<style scoped>
.chat-room {
  width: 80%;
  height: 70vh;
  margin-inline: auto;
  margin-top: 10rem;
  background-color: #fff;
  display: grid;
  grid-template-columns: 75% 25%;
  border: none;
  border-radius: 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.panel {
  width: 100%;
  height: 100%;
  background-color: rgb(245, 245, 245);
  border-radius: 0 2rem 2rem 0;
}

.msg-fade-enter-from,
.msg-faed-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.msg-fade-enter-active,
.msg-fade-leave-active {
  transition: all 0.9s ease;
}
</style>