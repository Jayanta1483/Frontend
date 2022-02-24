import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import ChatRoom from '../views/ChatRoom.vue'
import { auth } from '../firebase/config'


const requireAuth = (to, from, next)=>{
   if(!auth.currentUser){
     next({ name : 'Welcome'})
   }else{
     next()
   }
}

const userLogged = (to, from, next)=>{
  if(auth.currentUser){
    next({name : 'ChatRoom'})
  }else{
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter : userLogged
  },
  {
    path: '/chat',
    name: 'ChatRoom',
    component: ChatRoom,
    beforeEnter : requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
