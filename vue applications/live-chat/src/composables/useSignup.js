import { ref } from '@vue/reactivity'
import { auth } from "../firebase/config.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"



const error = ref(null)
const success = ref(null)

const signup = async (email, password, username) => {
    error.value = null

    try {
        const response = await createUserWithEmailAndPassword(auth, email, password)

        if (!response) {
            throw Error('Something went wrong...User Registration is incomplete..!!')
        }
        
        await updateProfile(auth.currentUser, { displayName : username})
        success.value = "Successfully Registered !!"
        error.value = null

    } catch (err) {
        error.value = err.message
        console.log(error.value)
    }
}

export const useSignup = () => {
    return { signup, error, success }
}