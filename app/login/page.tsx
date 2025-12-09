'use client'
import { useState } from "react"
import { auth } from '../config/firebase'
import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
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
        <input placeholder="email" onChange={(e)=>{
    setEmail(e.target.value)
        }}></input>
        <input placeholder = "password" onChange={(e)=>{
    setPassword(e.target.value)
        }}></input>
        <button onClick={login}>Sign up</button>
        <button onClick={loginWithGoogle}>Sign up with google</button>
        </>
    )
}