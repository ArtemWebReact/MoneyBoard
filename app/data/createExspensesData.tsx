import { useEffect, useState } from "react"
import { addDoc } from "firebase/firestore"
import { collection } from "firebase/firestore"
import { deleteDoc } from "firebase/firestore"
import { auth, db } from "../config/firebase"
import CreateProps from "../props/createProps"
import { waitForPendingWrites } from "firebase/firestore"
export default function CreateExspensesData(){
   const [number, setNumber] = useState(1)
    const exspensesCollection = collection(db, "exspenses")
     const [exspenseAmount, setExspenseAmount] = useState<number>(0)
      const [exspense, setExspense] = useState<string>('')
      const addPost = async() => {
         try{
             await waitForPendingWrites(db);
            const uId = auth.currentUser?.uid
            await addDoc(exspensesCollection, {
                amount: exspenseAmount,
                exspenses: exspense,
                userId: uId
            })
            setNumber((prev)=>(prev++))
         }
         catch(err){
                await waitForPendingWrites(db);
        console.error(err)
         }
      }
           useEffect(()=>{
         console.log("Оновлена сторінка")
      }, [exspense, exspenseAmount])
      return(
        <>
        <CreateProps setSomeAmount = {setExspenseAmount} setType = {setExspense} dataFunction = {addPost}></CreateProps>
        </>
        
      )
 
}