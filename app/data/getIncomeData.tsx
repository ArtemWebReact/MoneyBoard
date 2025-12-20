'use client'
import { useState } from "react";
import { db } from "../config/firebase";
import { getDocs, query, QuerySnapshot } from "firebase/firestore";
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
import { waitForPendingWrites } from "firebase/firestore";

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
               await waitForPendingWrites(db);
              
 if(current){
   if(!auth.currentUser) return 0 
     const uid = auth.currentUser.uid
     localStorage.setItem("uid", uid)
     const currentCollection = query(collection(db, 'income'), where("userId" , "==" , localStorage.getItem("uid")))
     const data = await getDocs(currentCollection)
     const exspenses: ExspensesTSX[] = [] 
     const sumExspenses: number[] = [] 
     const readyData = data.docs 
   
     
     readyData.map((el)=>{ 
      const data = el.data() as ExspensesTSX
      const HTMLData = {
        ...data,
        idProps: el.id,
        userId: uid
      } 
      exspenses.push(HTMLData as ExspensesTSX)
      sumExspenses.push(HTMLData['amount'] as number)
      const HTMLDataAmount = HTMLData['amount']
      setSumExspenses(sumExspenses.reduce((acc, cur)=>(acc+cur)))
      setSumIncome(sumExspenses.reduce((acc, cur)=>(acc+cur)))
      setDataExspensesAmount(exspenses as ExspensesTSX[])

     
     })}

         }
         catch(err){
             await waitForPendingWrites(db)
console.error(err)
         }
  }
  getData()
  })

  return(
    <>
   
<div className="">
  {dataExspensesAmount.map((el, index)=>(
   <IncomeProps key = {index} income = {el} idProps = {el.idProps} />
  ))}
</div>
    </>
  )
}