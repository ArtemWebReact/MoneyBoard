import { useState } from "react"
import { addDoc } from "firebase/firestore"
import { collection } from "firebase/firestore"
import { deleteDoc } from "firebase/firestore"
import { auth, db } from "../config/firebase"
import CreateProps from "../props/createProps"
import { waitForPendingWrites } from "firebase/firestore"
export default function CreateIncomeData(){
  const [number, setNumber] = useState(1)
    const exspensesCollection = collection(db, "income")
     const [incomeAmount, setIncomeAmount] = useState<number>(0)
      const [income, setIncome] = useState<string>('')
      const addPost = async() => {
         try{
          await waitForPendingWrites(db);
            const uId = auth.currentUser?.uid
            await addDoc(exspensesCollection, {
                amount: incomeAmount,
                'sourceOfIncome': income,
                userId: uId
            })
                  setNumber((prev)=>(prev++))
         }
         catch(err){
              await waitForPendingWrites(db);
        console.error(err)
         }
      }
      return(
        <>
      <CreateProps setSomeAmount = {setIncomeAmount} setType = {setIncome} dataFunction = {addPost} ></CreateProps>
        </>
        
      )
}