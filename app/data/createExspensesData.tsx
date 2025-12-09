import { useState } from "react"
import { addDoc } from "firebase/firestore"
import { collection } from "firebase/firestore"
import { deleteDoc } from "firebase/firestore"
import { auth, db } from "../config/firebase"
import CreateProps from "../props/createProps"
export default function CreateExspensesData(){
    const exspensesCollection = collection(db, "exspenses")
     const [exspenseAmount, setExspenseAmount] = useState<number>(0)
      const [exspense, setExspense] = useState<string>('')
      const addPost = async() => {
         try{
            const uId = auth.currentUser?.uid
            await addDoc(exspensesCollection, {
                amount: exspenseAmount,
                exspenses: exspense,
                userId: uId
            })
         }
         catch(err){
        console.error(err)
         }
      }
      return(
        <>
        <CreateProps setSomeAmount = {setExspenseAmount} setType = {setExspense} dataFunction = {addPost}></CreateProps>
        </>
        
      )
}