import { useState } from "react"
import { addDoc } from "firebase/firestore"
import { collection } from "firebase/firestore"
import { deleteDoc } from "firebase/firestore"
import { auth, db } from "../config/firebase"
import CreateProps from "../props/createProps"
export default function CreateIncomeData(){
    const exspensesCollection = collection(db, "income")
     const [incomeAmount, setIncomeAmount] = useState<number>(0)
      const [income, setIncome] = useState<string>('')
      const addPost = async() => {
         try{
            const uId = auth.currentUser?.uid
            await addDoc(exspensesCollection, {
                amount: incomeAmount,
                'sourceOfIncome': income,
                userId: uId
            })
         }
         catch(err){
        console.error(err)
         }
      }
      return(
        <>
      <CreateProps setSomeAmount = {setIncomeAmount} setType = {setIncome} dataFunction = {addPost} ></CreateProps>
        </>
        
      )
}