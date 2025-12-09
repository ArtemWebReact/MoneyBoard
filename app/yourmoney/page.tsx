'use client'
import Navigation from "../basic/Navigation"
import GetIncomeData from "../data/getIncomeData"
import GetSum from "../data/getSum"
import GetExspensesData from "../data/getExspensesData"
import MoneyContext from "../context"
import { useState } from "react"
import CreateExspensesData from "../data/createExspensesData"
import CreateIncomeData from "../data/createIncomeData"
export default function MoneyBoard(){
    const [sumIncome , setSumIncome] = useState<number>(0)
    const [sumExspense, setSumExspense] = useState<number>(0)
    return(
        <>
        <MoneyContext.Provider value = {{sumIncome, setSumIncome, sumExspense, setSumExspense}}>
        <Navigation></Navigation>
 
        <section className="w-full min-h-screen h-auto bg-[gray] flex justify-center items-center">

<div className="w-full h-screen flex justify-around items-center ">
    
 <div className=" rounded w-[30%] min-h-[90%]  h-auto bg-black  ">

    <h2 className="text-white flex justify-around  m-6">Income</h2>
     <CreateIncomeData></CreateIncomeData>
        <GetIncomeData></GetIncomeData>
       
           
 </div>
  <div className=" rounded w-[30%] min-h-[90%]  h-auto bg-black  ">

    <h2 className="text-white flex justify-around  m-6">Exspenses</h2>
      <CreateExspensesData></CreateExspensesData>
        <GetExspensesData></GetExspensesData>
                 
 </div>

<div className=" rounded w-[30%] h-[90%] bg-black">
     <h2 className="text-white flex justify-around m-6 ">Balance</h2>
   
             <div className="bg-[#030033] h-auto w-auto flex justify-center border-white border-1 items-center flex-col gap-1 m-1">
  <p className="text-white">{sumIncome - sumExspense}</p>
         </div>
</div>
</div>
</section>
</MoneyContext.Provider>
        </>
    )
}