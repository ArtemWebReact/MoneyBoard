'use client'
import { useState } from "react"
import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { googleProvider } from "../config/firebase";
import { useRouter } from "next/navigation";
export default function RegisterAuth(){
   const goThere = useRouter()
    const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
 const register = async() =>{
 try{
    await createUserWithEmailAndPassword(auth, email, password)
    goThere.push('/yourmoney')
 }
 catch(err){
 console.error(err)
 }
 
 }
  const googleRegisterFunction = async()=>{
    try{
        await signInWithPopup(auth, googleProvider)
        goThere.push('/yourmoney')
    }
    catch(err){
        console.error(err)
    }
  }
    return(
        <>
        <input placeholder="email" onChange={(e)=>{
    setEmail(e.target.value)
        }}></input>
        <input placeholder = "password" onChange={(e)=>{
    setPassword(e.target.value)
        }}></input>
        <button onClick={register}>Sign up</button>
         <button onClick={googleRegisterFunction}>Sign up</button>
        </>
    )
}