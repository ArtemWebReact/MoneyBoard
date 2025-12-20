import type { ExspensesTSX } from "../interface/interface";
import type { ExspenseProps } from "../interface/interface";
import { doc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { cyberFont2 } from "../fonts/fonts";
import { db } from "../config/firebase";
import { waitForPendingWrites } from "firebase/firestore";
export default function ExspensesProps({exspenses}: ExspenseProps){
      const deleteData = async(idProps:string) =>{
      try{
             await waitForPendingWrites(db);
      const destroyThis = doc(db, 'exspenses', idProps)
      await deleteDoc(destroyThis)
      }
      catch(err){
     console.error(err)
      }
    }
    return(
        <>
        <div className={`bg-[#030033] ${cyberFont2.className} min-h-[90%] h-[90%] max-h-[90%] w-auto flex justify-center border-white border-1 items-center flex-col gap-1 m-1`}>
        <p key = {exspenses.key}  className="text-white">{exspenses.amount}</p>
         <p key = {exspenses.key} className="text-white">{exspenses['exspenses']}</p>
            <button className = "text-white" onClick={()=>{deleteData(exspenses.idProps)}}>X</button>
         </div>
        </>
    )
}