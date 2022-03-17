
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { ref, watchEffect } from "vue";
import { db } from "../firebase/config.js";

export const useShowMessages = (_collection, _orderby) => {
    const msgCollection = collection(db, _collection)
    const q = query(msgCollection, orderBy(_orderby))
    const msgs = ref([])
    const error = ref(null)

     const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let docs = []
        querySnapshot.forEach(doc => {
            let data = doc.data({ serverTimestamps : 'estimate'})
            docs.push({...data})
        })
        console.log(querySnapshot)
        msgs.value = docs
        error.value = null
       
    }, (err) => {
        error.value = err.message
    })
   
    watchEffect((onInvalidate)=>{
        onInvalidate(()=> unsubscribe())
    })

    return { msgs, error }

}

