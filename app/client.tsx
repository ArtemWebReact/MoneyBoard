'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './basic/Header'
import Footer from './basic/Footer'
import './globals.css'
import MoneyContext from "./context";
import { useState } from "react";
import { useEffect } from "react";

export default function LayoultClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
      const [sumIncome , setSumIncome] = useState<number>(0)
    const [sumExspense, setSumExspense] = useState<number>(0)
    const [visible2, setVisible2] = useState<number>(0)
        useEffect(()=>{
          console.log(visible2)
        return 
        }, [sumIncome, sumExspense, visible2])
  return (
       <MoneyContext.Provider value = {{sumIncome, setSumIncome, sumExspense, setSumExspense, visible2, setVisible2}}>
    
  
  

        {children}
   
      
   

    </MoneyContext.Provider>
  );
}