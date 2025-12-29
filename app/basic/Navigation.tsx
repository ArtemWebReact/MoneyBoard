'use client'
import { useState } from "react"
import Link from "next/link"
import { cyberFont3 } from "../fonts/fonts"
import '../page.css'
import { db } from "../config/firebase"
import { auth } from "../config/firebase"
import { signOut } from "firebase/auth"
export default function Navigation(){
    const [hidden , setHidden] = useState('hidden')

    return(
        <>
        <button className = "flex fixed top-0 left-0 text-white text-[2rem] z-50" id ="open" onClick = {()=>{
           setHidden('flex')
             }}>☰</button>
        <nav id = "navigation" className = {`${hidden} justify-center items-center xl:w-[10%] md:w-[20%] w-[30%] h-screen fixed left-0 top-0 bg-[#030033] z-9999`}
        >
                    <button className = "fixed top-0 left-0 text-white text-[2rem] z-50" onClick = {()=>{
           setHidden('hidden')
             }}>✖</button>
            <ul className="flex flex-col justify-center gap-10 items-center">
                    <li className="relative top-0 left-0 xl:text-[1.3rem] text-[1rem]"><Link href = "/" className={`text-white ${cyberFont3.className} afterMe p-2`}><span className="spanNav">Home</span></Link></li>
                    <li className="relative top-0 left-0 xl:text-[1.3rem] text-[1rem]"><Link href = "/register"  className={`text-white ${cyberFont3.className} afterMe  p-2`}><span className="spanNav" >Register</span></Link></li>
              <li className="relative top-0 left-0 xl:text-[1.3rem] text-[1rem]"> <Link href = "/login"  className={`text-white ${cyberFont3.className}  afterMe p-2`}><span className="spanNav">Login</span></Link></li>
               <li className="relative top-0 left-0 xl:text-[1.3rem] text-[1rem]"><Link href = "/yourmoney"  className={`text-white ${cyberFont3.className}  afterMe p-2`}><span className="spanNav">Your Money</span></Link></li>
               <li className="relative top-0 left-0 xl:text-[1.3rem] text-[1rem]"><Link href = "/graphics"  className={`text-white ${cyberFont3.className}  afterMe p-2`}><span className="spanNav">Graphics</span></Link></li>
            </ul>

        </nav>
        </>
    )
}