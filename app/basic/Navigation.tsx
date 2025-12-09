'use client'
import { useState } from "react"

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
            <ul>
                <li className="text-white">
                   Expenses
                </li>
            </ul>

        </nav>
        </>
    )
}