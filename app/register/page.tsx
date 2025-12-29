'use client'
import { useState } from "react"
import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { googleProvider } from "../config/firebase";
import { useRouter } from "next/navigation";
import { cyberFont } from "../fonts/fonts";
import { cyberFont2 } from "../fonts/fonts";
import { cyberFont3 } from "../fonts/fonts";
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
<section className="flex flex-col lg:flex-row w-full h-screen">
  {/* Відео */}
  <video
    autoPlay
    loop
    muted
    className="object-cover w-full lg:w-1/2 h-[40vh] lg:h-screen"
  >
    <source src="/video/videoAuth.mp4" type="video/mp4" />
  </video>

  {/* Форма */}
  <div className="z-[100] w-full lg:w-1/2 h-[60vh] lg:h-screen bg-[#2b165a] flex justify-center items-center">
    <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] bg-[#7354bd] flex justify-center items-center flex-col gap-6 rounded-xl p-6">
      <h1 className={`text-white text-xl md:text-2xl ${cyberFont3.className}`}>
        Register
      </h1>

      <input
        placeholder="Email"
        className="bg-white rounded-xl w-full h-10 px-3"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        className="bg-white rounded-xl w-full h-10 px-3"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className={`bg-[#030033] rounded-xl w-full h-10 text-white hover:bg-[#2b165a] transition duration-300 ${cyberFont.className}`}
        onClick={register}
      >
        Sign up
      </button>

      <p className={`text-white ${cyberFont.className}`}>or</p>

      <button
        className={`text-white ${cyberFont.className} w-full h-10 border border-white rounded-xl hover:bg-[#2b165a] transition duration-300`}
        onClick={googleRegisterFunction}
      >
        Sign up with Google
      </button>
    </div>
  </div>
</section>

        </>
    )
}