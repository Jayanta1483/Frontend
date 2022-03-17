<template>
  <form action="" class="chat-form" @submit.prevent="sendMsg"> 
      <textarea name="" class="chat-text" v-model="userMessage" required></textarea>
      <button class="msgSub material-icons"  >send</button>
  </form>
</template>

<script setup>
import { serverTimestamp } from "@firebase/firestore";
import { ref } from "@vue/reactivity";
import { useUserProfile } from "../composables/useUserProfile";
import { useAddChat } from "../composables/useAddChat";
import { onUpdated, watchEffect } from "@vue/runtime-core";


const { userId, userName } = useUserProfile()
const userMessage = ref('')
const { addChat, error } = useAddChat()


const sendMsg = async () => {

    let message = {
        message : userMessage.value,
        name : userName.value,
        uid : userId.value,
        createdAt : serverTimestamp()
    }

 await addChat('chatMessages', message)
 
    console.log(message, error.value)
    userMessage.value = ''
}


</script>

<style scoped>
.chat-form{
    display: flex;
    justify-content: space-evenly;
}
.chat-form textarea{
  display: inline-block;
  width: 90%;
  padding: 0.2rem  1.8rem;
  border-radius: 2rem;
  border: none;
  background-color: rgb(245, 245, 245);
  resize: none;
  font-size: 1.6rem;
}
.chat-form textarea:focus{
    outline: none;
}

.msgSub{
border: none;
background-color: #fff;
cursor: pointer;
color: rgb(114, 231, 192);
}
</style>