'use client'
import Link from "next/link"
import { cyberFont3 } from "../fonts/fonts"
import { useEffect, useState } from "react"
export default function Header(){
    const [visible, setVisible] = useState<string>('hidden')
        const [visible2, setVisible2] = useState<string>('flex')
   /* useEffect(()=>{
       setInterval(()=>{
        setVisible((prev)=>(prev=='hidden'?'flex':'hidden'))
        setVisible2((prev)=>(prev=='flex'?'hidden':'flex'))
       }, 500)
    }, [])
    */
    return(
        <>
        <nav className="z-[1000] w-full h-[10vh] bg-[#030033] flex justify-around items-center">
    <span  className={`text-white ${cyberFont3.className} text-[1.5rem] m-10 flex flex-row`}><span id = "visible" className={`${visible}`}>M</span><span id = "visible2" className={`${visible2}`}>|</span>B‑CashMatrix</span>
    <ul className="flex justify-around items-center w-full h-full">
        <li className={`text-white ${cyberFont3.className} text-[1.2rem]`}><Link href = "/">Home</Link></li>
        <li className={`text-white ${cyberFont3.className} text-[1.2rem]`}><Link href = "/register">Register</Link></li>
        <li className={`text-white ${cyberFont3.className} text-[1.2rem]`}><Link href = "/login">Login</Link></li>
        { /*<li className={`text-white ${cyberFont3.className} text-[1.2rem]`}><Link href = "/yourmoney">Exspenses</Link></li> */}
        <li className={`text-white ${cyberFont3.className} text-[1.2rem]`}>Logout</li>
    </ul>
        </nav>
        </>
    )
}