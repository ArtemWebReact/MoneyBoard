'use client'
import { useState } from "react";
import { db } from "../config/firebase";
import { DocumentReference, getDocs, query } from "firebase/firestore";
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
import { deleteDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { waitForPendingWrites } from "firebase/firestore";
export default function GetExspensesData(){
const context = useContext(MoneyContext)
const current =  auth.currentUser

if(!context) return 0 
const { sumExspense, setSumExspense, visible2 } = context
  const exspensesCollection = collection(db, 'exspenses')
  const deleteData = async(id:string) =>{
  try{
  const destroyThis = doc(db, 'exspenses', id)
  await deleteDoc(destroyThis)
  }
  catch(err){
 console.error(err)
  }
}

 const [sumExspenses, setSumExspenses] = useState(0)
  const [dataExspensesAmount , setDataExspensesAmount] = useState<ExspensesTSX[]>([]) 
    const [dataHTMLExspensesAmount , setDataHTMLExspensesAmount] = useState<HTMLElement[]>([]) 
  useEffect(()=>{
    const getData = async() =>{
         try{
               await waitForPendingWrites(db);

  if(!auth.currentUser) return 0 
     const uid = auth.currentUser.uid
     localStorage.setItem("uid", uid)
     const currentCollection = query(collection(db, 'exspenses'), where("userId" , "==" , localStorage.getItem("uid")))
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
      setSumExspense(sumExspenses.reduce((acc, cur)=>(acc+cur)))
      setDataExspensesAmount(exspenses as ExspensesTSX[])
 
     
     })

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
   
<div className="max-h-full ">
  {visible2}
  {dataExspensesAmount.map((el, index)=>(
    
   <ExspensesProps key = {index} exspenses = {el} idProps = {el.idProps}/>

  ))}
</div>
    </>
  )
}