'use client'
import { useState } from "react"
import Link from "next/link"
import { cyberFont3 } from "../fonts/fonts"
export default function Navigation(){
    const [hidden , setHidden] = useState('hidden')
    return(
        <>
        <button className = "flex fixed top-0 left-0 text-white" id ="open" onClick = {()=>{
           setHidden('flex')
             }}>///</button>
        <nav id = "navigation" className = {`${hidden} justify-center items-center w-[10%] h-screen fixed left-0 top-0 bg-[#030033] z-9999`}
        >
                    <button className = "fixed top-0 left-0 text-white" onClick = {()=>{
           setHidden('hidden')
             }}>X</button>
            <ul className="flex flex-col justify-center gap-10 items-center">
                    <Link href = "/" className={`text-white ${cyberFont3.className} `}>Home</Link>
                    <Link href = "/register"  className={`text-white ${cyberFont3.className} `}>Register</Link>
               <Link href = "/login"  className={`text-white ${cyberFont3.className} `}>Login</Link>
               <Link href = "/yourmoney"  className={`text-white ${cyberFont3.className} `}>Your Money</Link>
               <Link href = "/graphics"  className={`text-white ${cyberFont3.className} `}>Graphics</Link>
            </ul>

        </nav>
        </>
    )
}