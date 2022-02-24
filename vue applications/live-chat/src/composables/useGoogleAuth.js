import { signInWithPopup } from "firebase/auth";
import { ref } from "vue";
import { auth, provider } from "../firebase/config";

const googleUser = ref({})
const googleError = ref(null)

const googleLogin = async ()=>{

    await signInWithPopup(auth, provider)
    
}

export const googleAuth = () =>{
    return { googleLogin }
}