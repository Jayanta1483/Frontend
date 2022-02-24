<template>
  <div class="header"></div>
  <div class="chat-window" ref="chatWindow">
    <div class="msg-background">
      <div
        v-for="(msg, index) in formatedMsgs"
        :key="index"
        :class="[msg.uid == user.uid ? 'active' : 'non-active']"
        class="single-msg"
      >
        <div v-if="msg.uid !== user.uid">
          <span class="o-name">{{ msg.name }}</span>
          <p>{{ msg.message }}</p>
          <span class="msgTime">{{ msg.createdAt }}</span>
        </div>
        <div v-else>
          <span class="msgTime">{{ msg.createdAt }}</span>
          <p>{{ msg.message }}</p>
          <span class="m-name">You</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed, onUpdated, watchEffect } from "@vue/runtime-core";
import { useShowMessages } from "../composables/useShowMessages";
import { auth } from "../firebase/config";
import { formatDistanceToNow } from "date-fns";
import useSound from 'vue-use-sound'


const user = ref(auth.currentUser);
const { msgs, error } = useShowMessages("chatMessages", "createdAt");
const chatWindow = ref(null);

onUpdated(() => {
  chatWindow.value.scrollTop = chatWindow.value.scrollHeight;
});



const formatedMsgs = computed(()=>{
  return msgs.value.map(msg => {
    let time = formatDistanceToNow(msg.createdAt.toDate(), { addSuffix : true })
    return { ...msg, createdAt : time}
  })
})


</script>

<style scoped>
.header {
  height: 5rem;
}
.chat-window {
  width: 100%;
  height: 40rem;
  padding: 1rem;
  border-radius: 5px;
  overflow-y: auto;
  font-size: 1.6rem;
}

.chat-window::-webkit-scrollbar {
  width: 0.5rem;
}

.m-name,
.o-name {
  display: block;
}

.m-name {
  text-align: right;
}

.single-msg {
  padding: 0.5rem;
}

.active {
  display: flex;
  justify-content: flex-end;
}

.active p {
  margin: 1.2rem;
  padding: 0.9rem 3rem;
  background-color: rgb(122, 240, 201);
  border-radius: 2rem;
  position: relative;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.active p::after {
  content: "";
  position: absolute;
  bottom: -5px;
  right: 1px;
  border-top: 1px solid rgb(122, 240, 201);
  border-right: 15px solid rgb(122, 240, 201);
  border-bottom: 35px solid transparent;
}

.non-active {
  display: flex;
  justify-content: flex-start;
}

.non-active p {
  margin: 1.2rem;
  padding: 0.9rem 3rem;
  background-color: rgba(0, 0, 0);
  border-radius: 2rem;
  position: relative;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

.non-active p::before {
  content: "";
  position: absolute;
  top: -7px;
  left: 3px;
  border-top: 35px solid transparent;
  border-left: 15px solid rgba(0, 0, 0);
  border-bottom: 1px solid rgba(0, 0, 0);
}

.msgTime,
.o-name,
.m-name{
  font-size: 1.2rem;
  font-weight: 800;
  font-style: italic;
  color: rgb(24, 24, 24);
}
</style>