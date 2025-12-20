"use client"
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
export default function Home() {
  const [scrollY, setScrollY] = useState<number>(0)
   let array = [] 
   
  useEffect(()=>{
    const listenClose =(e:WheelEvent)=>{
       const target = e.target as HTMLElement

 array.push(e.deltaY)
 const sumScroll = array.reduce((acc, cur)=>(acc+cur))

 setScrollY((prev)=>(prev+e.deltaY))
    }
  const first = document.querySelector<HTMLElement>('#first')
  if(!first) return 
  window.addEventListener('wheel', listenClose)
 console.log(scrollY)
 return ()=>{
  window.removeEventListener('wheel', listenClose)
 }
 
  }, [])
  if(!window) return
  return (
   <>
   <section id = "first" className = {` bg-[url('/images/section1.png')] bg-cover bg-center w-full h-screen fixed bottom-0 right-0 z-[-100] flex justify-center items-center`}>
   <div className="w-full h-screen fixed bg-[black] opacity-[60%] z-[-1000]"></div>
<h1 className="text-yellow text-[2rem] z-[1000]">MB‑CashMatrix</h1>

    
   </section>
     <section id = "second" style ={{height:`${scrollY}px`}} className = {`w-full  bg-[pink]  fixed bottom-0 right-0 z-[-100]`}></section>
      <section id = "second" style ={{height:`${scrollY - window.innerHeight}px`}} className = {`w-full  bg-[green]  fixed bottom-0 right-0 z-[-100]`}></section>


   </>
  );
}
