import { onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";
import { auth } from "../firebase/config.js";


const userName = ref('')
const userEmail = ref('')
const userId = ref(null)

onAuthStateChanged(auth, (_user) => {
  if(_user){
    userId.value = _user.uid
    userName.value = _user.displayName
    userEmail.value = _user.email
    
  }
  
})

export const useUserProfile = ()=>{

    return { userId, userName, userEmail }
}