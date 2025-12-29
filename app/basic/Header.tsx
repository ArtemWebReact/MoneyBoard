'use client'
import Link from "next/link"
import { cyberFont3 } from "../fonts/fonts"
import { useEffect, useState } from "react"
import { db } from "../config/firebase"
import { auth } from "../config/firebase"
import { signOut } from "firebase/auth"
import { useContext } from "react"
import MoneyContext from "../context"
import { useRouter } from "next/navigation";
export default function Header(){
    const router = useRouter()
    const context = useContext(MoneyContext)
 if(!context) return
 const {setSumExspense, setSumIncome} = context
    const [visible, setVisible] = useState<string>('hidden')
       
   /* useEffect(()=>{
       setInterval(()=>{
        setVisible((prev)=>(prev=='hidden'?'flex':'hidden'))
        setVisible2((prev)=>(prev=='flex'?'hidden':'flex'))
       }, 500)
    }, [])
    */
       const logout = async() =>{
     try{
await signOut(auth)
router.push('/')
setSumExspense(0)
setSumIncome(0)
     }
         catch(err){
        console.error(err)
     }}
    return(
        <>
      
        <nav className="w-full h-[10vh] bg-[#030033] flex justify-around items-center z-[1000]">
         
    <span  className={`text-white ${cyberFont3.className} text-[1.5rem] xl:text-[2.5rem]  m-10 flex flex-row`}>MB‑CashMatrix</span>
    <ul className="flex justify-around items-center w-full h-full">
        <li className={`text-white ${cyberFont3.className} text-[1.2rem] xl:text-[1.5rem] opacity-0 lg:opacity-100 p-2 hover:bg-[yellow] hover:text-[#030033] transition duration-1000 delay-150 ease-in-out rounded-xl shadowHeader`}><Link href = "/">Home</Link></li>
        <li className={`text-white ${cyberFont3.className} text-[1.2rem] xl:text-[1.5rem] opacity-0 lg:opacity-100 p-2 hover:bg-[rgb(255,0,0)] hover:text-[#030033] transition duration-1000 delay-150 ease-in-out rounded-xl shadowHeader2`}><Link href = "/register">Register</Link></li>
        <li className={`text-white ${cyberFont3.className}  text-[1.2rem] xl:text-[1.5rem] opacity-0 lg:opacity-100 p-2 hover:bg-[rgb(102,255,0)] hover:text-[#030033] transition duration-1000 delay-150 ease-in-out rounded-xl shadowHeader3`}><Link href = "/login">Login</Link></li>
        { /*<li className={`text-white ${cyberFont3.className} text-[1.2rem]`}><Link href = "/yourmoney">Exspenses</Link></li> */}
        <li onClick={logout} className={`text-white ${cyberFont3.className}  text-[1.2rem] xl:text-[1.5rem] opacity-0 lg:opacity-100 p-2 hover:bg-[rgb(0,89,255)] hover:text-[#030033] transition duration-1000 delay-150 ease-in-out rounded-xl shadowHeader4`}>Logout</li>
    </ul>
        </nav>
        </>
    )
}