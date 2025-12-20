'use client'
import Navigation from "../basic/Navigation"
import GetIncomeData from "../data/getIncomeData"
import GetSum from "../data/getSum"
import GetExspensesData from "../data/getExspensesData"
import MoneyContext from "../context"
import { useEffect, useState } from "react"
import CreateExspensesData from "../data/createExspensesData"
import CreateIncomeData from "../data/createIncomeData"
import SimpleChart from "../graphics/page"
import { useContext } from "react"
import { cyberFont } from "../fonts/fonts"
export default function MoneyBoard(){
 const context = useContext(MoneyContext)
 if(!context) return 0
 const {sumIncome, sumExspense} = context
    return(
        <>

     
 
        <section className={`w-full min-h-screen h-auto bg-[gray] flex justify-center items-center ${cyberFont.className} `}>

<div className="w-full h-screen flex justify-around items-center ">
    
 <div className=" rounded w-[30%] min-h-[90%] h-[90%] max-h-[90%] bg-black  overflow-y-scroll  overflow-hidden">

    <h2 className="text-white flex justify-around  m-6 text-2xl">Income</h2>
     <CreateIncomeData></CreateIncomeData>
        <GetIncomeData></GetIncomeData>
       
           
 </div>
  <div className=" rounded w-[30%] min-h-[90%] h-[90%] max-h-[90%] bg-black overflow-y-scroll  overflow-hidden boz-border ">

    <h2 className="text-white flex justify-around  m-6 text-2xl">Exspenses</h2>
      <CreateExspensesData></CreateExspensesData>
        <GetExspensesData></GetExspensesData>
                 
 </div>

<div className=" rounded w-[30%] min-h-[90%] h-[90%] max-h-[90%] bg-black">
     <h2 className="text-white flex justify-around m-6 text-2xl ">Balance</h2>
   
             <div className="bg-[#030033] h-auto w-auto flex justify-center border-white border-1 items-center flex-col gap-1 m-1">
  <p className="text-white">{sumIncome - sumExspense}</p>
         </div>
</div>
</div>

</section>

        </>
        
    )
    
}