import type { IncomeTSX } from "../interface/interface";
import type { IncomeProps } from "../interface/interface";

export default function IncomeProps({income}: IncomeProps){
    return(
        <>
        <div className="bg-[#030033] h-auto w-auto flex justify-center border-white border-1 items-center flex-col gap-1 m-1">
        <p key = {income.key}  className="text-white">{income.amount}</p>
         <p key = {income.key} className="text-white">{income['sourceOfIncome']}</p>
         </div>
        </>
    )
}