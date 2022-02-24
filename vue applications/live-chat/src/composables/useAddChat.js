import { ref } from "@vue/reactivity";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config.js";



const error = ref(null)

const addChat = async (collec, doc) =>{

try {

    await addDoc(collection(db, collec), doc)
    
} catch (err) {
    error.value = err.message
    console.log(error.value)
}


}

export const useAddChat = () => {
    return {  addChat, error }
}