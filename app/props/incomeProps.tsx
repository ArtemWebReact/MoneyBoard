import { doc } from "firebase/firestore";
import type { IncomeTSX } from "../interface/interface";
import type { IncomeProps } from "../interface/interface";
import { db } from "../config/firebase";
import { deleteDoc } from "firebase/firestore";
import { waitForPendingWrites } from "firebase/firestore";
import { cyberFont2 } from "../fonts/fonts";
export default function IncomeProps({income}: IncomeProps){
    
          const deleteData = async(idProps:string) =>{
          try{
                 await waitForPendingWrites(db);
          const destroyThis = doc(db, 'income', idProps)
          await deleteDoc(destroyThis)
          }
          catch(err){
                 await waitForPendingWrites(db);
         console.error(err)
          }
        }
    return(
        <>
        <div className={`bg-[#030033] ${cyberFont2.className} min-h-[90%] h-[90%] max-h-[90%] w-auto flex justify-center border-white border-1 items-center flex-col gap-1 m-1`}>
        <p key = {income.key}  className="text-white">{income.amount}</p>
         <p key = {income.key} className="text-white">{income['sourceOfIncome']}</p>
               <button className = "text-white" onClick={()=>{deleteData(income.idProps)}}>X</button>
         </div>
        </>
    )
}