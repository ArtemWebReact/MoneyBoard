'use client'
import { useState } from "react";
import { db } from "../config/firebase";
import { getDocs, query } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { Html } from "next/document";
import { useEffect } from "react";
import IncomeProps from "../props/incomeProps";
import type { ExspensesTSX } from "../interface/interface";
import ExspensesProps from "../props/exspensesProps";
import GetSum from "./getSum";
import { useContext } from "react";
import MoneyContext from "../context";
import { auth } from "../config/firebase";
import { where } from "firebase/firestore";

export default function GetExspensesData(){
const context = useContext(MoneyContext)
const current =  auth.currentUser

if(!context) return 0 
const { sumIncome, setSumIncome } = context
  const exspensesCollection = collection(db, 'exspenses')
 const [sumExspenses, setSumExspenses] = useState(0)
  const [dataExspensesAmount , setDataExspensesAmount] = useState<ExspensesTSX[]>([]) 
    const [dataHTMLExspensesAmount , setDataHTMLExspensesAmount] = useState<HTMLElement[]>([]) 
  useEffect(()=>{
    const getData = async() =>{
         try{
          
 if(current){
     const uid = auth.currentUser?.uid
     const currentCollection = query(collection(db, 'income'), where("userId" , "==" , uid))
     const data = await getDocs(currentCollection)
     const exspenses: ExspensesTSX[] = [] 
     const sumExspenses: number[] = [] 
     const readyData = data.docs
     console.log(readyData)
     
     readyData.map((el)=>{ 
      const data = el.data() as ExspensesTSX
      const HTMLData = {
        ...data,
        userId: uid
      } 
      exspenses.push(HTMLData as ExspensesTSX)
      sumExspenses.push(HTMLData['amount'] as number)
      console.log(HTMLData)
      const HTMLDataAmount = HTMLData['amount']
      setSumExspenses(sumExspenses.reduce((acc, cur)=>(acc+cur)))
      setSumIncome(sumExspenses.reduce((acc, cur)=>(acc+cur)))
      setDataExspensesAmount(exspenses as ExspensesTSX[])
      console.log(HTMLData)
     
     })}

         }
         catch(err){
console.error(err)
         }
  }
  getData()
  })

  return(
    <>
   
<div>
  {dataExspensesAmount.map((el, index)=>(
   <IncomeProps key = {index} income = {el} />
  ))}
</div>
    </>
  )
}