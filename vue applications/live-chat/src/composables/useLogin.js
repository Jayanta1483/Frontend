import { ref } from '@vue/reactivity'
import { auth } from "../firebase/config.js";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth"



const error = ref(null)

const login = async (email, password) => {
    error.value = null

    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        
        error.value = null

    } catch (err) {
        error.value = err.message
        console.log(error.value)
    }
}

export const useLogin = () => {
    return { login, error  }
}