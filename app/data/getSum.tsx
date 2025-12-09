import { IncomeSum } from "../interface/interface";
export default function GetSum({sumIncomes, sumExspenses} : IncomeSum){
     return(
        <>
        <p>
        {(sumIncomes ?? 0) - (sumExspenses ?? 0)}
        </p>
        </>
     )
}