import type { ExspensesTSX } from "../interface/interface";
import type { ExspenseProps } from "../interface/interface";
import { doc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";
export default function ExspensesProps({exspenses}: ExspenseProps){
      const deleteData = async(id:string) =>{
      try{
      const destroyThis = doc(db, 'exspenses', id)
      await deleteDoc(destroyThis)
      }
      catch(err){
     console.error(err)
      }
    }
    return(
        <>
        <div className="bg-[#030033] h-auto w-auto flex justify-center border-white border-1 items-center flex-col gap-1 m-1">
        <p key = {exspenses.key}  className="text-white">{exspenses.amount}</p>
         <p key = {exspenses.key} className="text-white">{exspenses['exspenses']}</p>
            <button onClick={()=>{deleteData(exspenses.id)}}>X</button>
         </div>
        </>
    )
}