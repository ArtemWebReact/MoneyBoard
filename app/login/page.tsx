'use client'
import { useState } from "react"
import { auth } from '../config/firebase'
import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { cyberFont } from "../fonts/fonts";
import { cyberFont2 } from "../fonts/fonts";
import { cyberFont3 } from "../fonts/fonts";
export default function LoginAuth(){
  const goThere = useRouter()
    const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
 const login = async() =>{
 try{
    await signInWithEmailAndPassword(auth, email, password)
    goThere.push('yourmoney')
 }
 catch(err){
 console.error(err)
 }
 }
  const loginWithGoogle = async() =>{
 try{
    await signInWithPopup(auth, googleProvider)
        goThere.push('yourmoney')
 }
 catch(err){
 console.error(err)
 }
 
 }
    return(
        <>
        <section className="flex">
<video autoPlay loop muted className=" object-cover w-[60%] h-screen top-0 left-0">
    <source src = '/video/videoAuth.mp4' type = "video/mp4" ></source>
</video>

<div className="z-[100] w-[50%] h-screen bg-[#2b165a] flex justify-center items-center flex-col gap-6" >
    <div className=" w-[50%] h-[50%] bg-[#7354bd] flex justify-center items-center flex-col gap-6 rounded-xl " >
        <h1 className={`text-white  text-[1.5rem] ${cyberFont3.className}`}>Login</h1>
        <input placeholder="email" className = "bg-white rounded-xl w-[60%] h-[10%]" onChange={(e)=>{
    setEmail(e.target.value)
        }}></input>
        <input placeholder = "password" className = "bg-white rounded-xl w-[60%] h-[10%]" onChange={(e)=>{
    setPassword(e.target.value)
        }}></input>
  
        <button  className = {`bg-[#030033] rounded-xl w-[30%] h-[10%] text-[white] hover:text-[white] hover:bg-[#2b165a] transition delay-100 duration-300 ease-in-out  ${cyberFont.className}`} onClick={login}>Sign up</button>
          <p className={`text-white ${cyberFont.className}`}>or</p>
        <button className={`text-white ${cyberFont.className}`} onClick={loginWithGoogle}>Sign up with google</button>
        </div>
        </div>
        </section>
        </>
    )
}