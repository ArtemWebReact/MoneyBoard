"use client"
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { cyberFont } from "./fonts/fonts";
import { cyberFont2 } from "./fonts/fonts";
import { cyberFont3 } from "./fonts/fonts";
import { animate, splitText, stagger } from "animejs";
import { useRouter } from "next/navigation";
import { auth } from "./config/firebase";
import './page.css'
export default function Home() {
   const router = useRouter()
  const [scrollY, setScrollY] = useState<number>(0)
  const [top, setTop] = useState<number>(0)
   let array = [] 
   
  useEffect(()=>{

   const animeObserver = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
         if(entry.isIntersecting && !entry.target.classList.contains("animated")){
            entry.target.classList.add("animated")
 const {words}= splitText(entry.target as HTMLElement, {words:{wrap:'clip'}})
 animate(words, {
   y:[
      { to:['100%', '0%'] },
   ],
   ease: 'linear',
      duration:750,
   delay: stagger(100),

 })
         }
      })
   }, {
      threshold:0.3
   })
   const anime = document.querySelectorAll<HTMLElement>('h3')
   if(!anime) return
   anime.forEach((el)=>{animeObserver.observe(el)})
   

 
   //-------------------------------------------------Animejs
      const name =  document.querySelector<HTMLElement>("#name")
          const name2 =  document.querySelector<HTMLElement>("#name2")
          const name3 =  document.querySelector<HTMLElement>("#name3")
   if(!name) return 
      if(!name2) return 
            if(!name3) return 

      setInterval(
   ()=>{
     console.log(name3.style.textShadow)
 if(name3.style.textShadow == "rgb(8, 241, 0) -3px 0px"){
   name3.style.textShadow = ""
   setTimeout(()=>{
      name3.style.textShadow = "rgb(8, 241, 0) -3px 0px"
   }, 400)

 }
    else{
      name3.style.textShadow = "rgb(8, 241, 0) -3px 0px"
   }
}, 3000)

setInterval(
   ()=>{
     console.log(name.style.textShadow)
 if(name.style.textShadow == "rgb(255, 0, 0) -3px 0px"){
   name.style.textShadow = ""
   setTimeout(()=>{
      name.style.textShadow = "rgb(255, 0, 0) -3px 0px"
   }, 400)

 }
    else{
      name.style.textShadow = "rgb(255, 0, 0) -3px 0px"
   }
}, 3000)
setInterval(
   ()=>{
     console.log(name2.style.textShadow)
 if(name2.style.textShadow == "rgb(255, 0, 0) -3px 0px"){
   name2.style.textShadow = ""
   setTimeout(()=>{
      name2.style.textShadow = "rgb(255, 0, 0) -3px 0px"
   }, 400)

 }
    else{
      name2.style.textShadow = "rgb(255, 0, 0) -3px 0px"
   }
}, 3000)
   const observer1 = document.querySelectorAll<HTMLElement>('.observer1')
    const first = document.querySelector<HTMLElement>('#first')
   const line = document.querySelectorAll<HTMLElement>('.line')
   if(!observer1) return 
   const observerSection1 = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
         if(entry.isIntersecting){
                      entry.target.classList.remove('invisible')
            entry.target.classList.add('visible')
            
         }
         else{
             entry.target.classList.remove('visible')
                entry.target.classList.add('invisible')
         }
      })
   }, {
      threshold: 0.3
   })
  observer1.forEach((el)=>{observerSection1.observe(el)})
   const observer = new IntersectionObserver((entries)=>{
      if(!line) return
 entries.forEach((entry)=>{
   if(entry.isIntersecting){
      entry.target.classList.add('hello1')
         entry.target.classList.remove('hello0')
   }
   else{
    entry.target.classList.add('hello0')
         entry.target.classList.remove('hello1')
   }
 })
   }, {
      threshold:0
   })
        if(!line) return
   line.forEach((el)=>{observer.observe(el)})
      let plus = 0
 
   if(!line) return
     if(!first) return


//   setInterval(()=>{name.style.textShadow == 'red -3px 0px'? name.style.textShadow = 'red 0px 0px' : name.style.textShadow = 'red -3px 0px' },2000)
    const listenClose =(e:WheelEvent)=>{
       const target = e.target as HTMLElement

 array.push(e.deltaY)
 const sumScroll = array.reduce((acc, cur)=>(acc+cur))

 setScrollY((prev)=>(prev+e.deltaY))
    }

 
  }, [])

  return (
   <>
   <section id = "first" className = {` bg-[url('/images/section1.png')]  bg-cover bg-center min-w-full min-h-screen w-full h-screen max-w-full max-h-screen  flex justify-around items-center  sm-flex-col  a  flex justify-center items-center flex-col gap-10`}>
   <div  className="min-w-full w-full max-w-full h-screen max-h-screen absolute bg-[black] opacity-[60%]  container" ></div>
   <div className="w-full max-w-full min-w-full h-screen max-h-screen flex justify-center items-center flex-col gap-10 z-[1000] relative top-10 left-0 ">
<h1  className={` text-[yellow] text-[2.5rem] lg:text-[5.2rem] md:text-[3.5rem] sm:text-[1rem] ${cyberFont3.className}`}  id="name" style = {{
   textShadow: 'rgb(255, 0, 0) -3px 0px'
}}>MB‑CashMatrix</h1>
<h2   className={` text-[orange] text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]  sm:text-[1rem]  ${cyberFont.className}` }  >Financal controle of future</h2>
  <div className="line bg-[yellow] w-0"></div>
<h3   className={`text-[#929292] text-[1rem] sm:text-[1rem] md:text-[1.5rem] lg:text-[1.5rem] text-center   ${cyberFont2.className}`}>Your personal cyberpunk financial management system. Full control over cash flows in the digital world in 2077.</h3>
    <a  className={`observer1 opacity-0 h-auto w-auto ${cyberFont.className} text-[2rem] text-white border-solid border-[2px] border-yellow-300 rounded-xl p-2  transition delay-100 duration-100 ease-in-out `} id="hover " onClick={(e)=>{
         if(!auth.currentUser){
         router.push('/register')
      }
      else{
          router.push('/yourmoney')
      }
      }}>Try this</a>
   </div>
   </section>
 

          <section id = "first" className = {` bg-[url('/images/section2.png')]  bg-cover bg-center min-w-full min-h-screen w-full h-screen max-w-full max-h-screen  flex justify-center items-center flex-col gap-10`}>
   <div  className="min-w-full w-full max-w-full h-screen max-h-screen absolute bg-[black] opacity-[60%]  container2 m-5 " ></div>
   <div className="w-full max-w-full min-w-full h-screen max-h-screen flex justify-center items-center flex-col  z-[1000] ">
<h3  className={` text-[2.5rem] lg:text-[5.2rem] md:text-[3.5rem] sm:text-[1rem] ${cyberFont3.className} text-[blue] name2`} id="name2" style = {{
   textShadow: 'rgb(255, 0, 0) -3px 0px'
}} >Finance</h3>


<h2   className={`text-[#00FFFB] text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]  sm:text-[1rem]  ${cyberFont.className} m-10 `}>Income Tracking System</h2>
     
{/*<h3   className={`observer1 opacity-0 text-[red] text-[1rem] sm:text-[1rem] md:text-[1.5rem] lg:text-[1.5rem] text-center   ${cyberFont2.className}`*/}
<div id ="cards">
   <div className=" card text-white bg-[rgba(255,79,79,0.64)] hover:bg-[rgba(251,255,0,0.71)] duration-300 rounded-xl  flex items-center justify-center text-center p-5 ]">Track all your income in real-time.</div> 
   <div className=" card bg-[rgba(79,105,255,0.64)] hover:bg-[rgba(251,255,0,0.71)] duration-300 text-white rounded-xl  flex items-center justify-center text-center p-5 ">Complete monitoring of all expenses with automatic categorization.</div>
  <div className=" card bg-[rgba(0,255,234,0.64)] hover:bg-[rgba(251,255,0,0.71)] duration-300 text-white rounded-xl  flex items-center justify-center text-center p-5 ">Automatic balance calculation including all transactions with AI-powered forecasting.</div> 
  <div className=" card bg-[rgba(255,165,0,0.64)] hover:bg-[rgba(251,255,0,0.71)] duration-300 text-white rounded-xl flex items-center justify-center text-center p-5 "> Smart budgeting tools to help you plan ahead and stay on track. </div>
  </div>

</div>
   </section>
             <section id = "third" className = {`bg-[black]  min-w-full min-h-screen w-full h-screen max-w-full max-h-screen  flex justify-between items-center flex-col xl:flex-row  gap-5`}>
    <video autoPlay loop muted className=" z-10 xl:w-[50%] w-full xl:h-screen h-[50%]  bg-[black]  object-cover">
            <source src = '/video/section3.mp4' type = "video/mp4" ></source>
        </video>
        
   <div className="bg-[black] xl:w-[50%] xl:h-screen  w-[full]  h-[50%]  flex justify-center items-center flex-col gap-10 z-20 relative top-0 left-0 ">
<h1  className={`observer1 opacity-0 text-[green] text-[2.5rem] lg:text-[5.2rem] md:text-[3.5rem] sm:text-[1rem] ${cyberFont3.className}`}  id="name3" style = {{textShadow: 'rgb(8, 241, 0) -3px 0px'}}>ANALYTICS</h1>
<h2   className={`observer1 opacity-0 text-[#37fc00] text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]  sm:text-[1rem]  ${cyberFont.className}`}  >Deep Data Analytics</h2>
  <div className="line bg-[green] w-0"></div>
<h3   className={`observer1 opacity-0 text-[#929292] text-[1rem] sm:text-[1rem] md:text-[1.5rem] lg:text-[1.5rem] text-center  ${cyberFont2.className}`} id = "anime">Deep analysis of financial data with interactive charts and diagrams. Detailed statistics, trends and insights for smart decision-making.</h3>

   </div>
   </section>
<section id = "first" className = {` bg-[url('/images/cyberpunk.png')]  bg-cover bg-center min-w-full min-h-screen w-full h-screen max-w-full max-h-screen  flex justify-center items-center flex-col `}>

   <div  className="z-10 min-w-full w-full  max-w-full h-screen max-h-screen absolute bg-[black] opacity-[90%]  container4 flex-col" ></div>
         <div className="z-20 w-[80%] h-[50%] flex justify-center items-center  " style={{
      display:'flex'
   }} id = "one">
          <div className="h-auto w-auto p-10 bg-[black] border-1 border-[purple]">
       <p className="text-white text-[1.5rem]">★ ★ ★ ★ ★</p>
       <h3 className={`text-white xl:text-[1.5rem] md:text-[1.5rem] text-[1rem] ${cyberFont.className}`}>"This system transformed my financial chaos into pure order. The AI predictions are scary accurate. Best investment in 2077."</h3>
      <div className="w-full h-[20%] flex items-center justify-start">
      <div className="aspect-square max-w-[10vw] w-[7%] min-w-[50px]  bg-[rgba(204,0,255,0.32)] rounded-[100%] flex justify-center items-center m-2 text-white xl:text-[2rem] text-[1.5rem]">LR</div>
    <h3 className={`text-white xl:text-[1.3rem] text-[1rem] ${cyberFont2.className}`}>Viktor Nakamura</h3>
    </div>
      </div>
      
      

   </div>

         <div className="z-20 w-[80%] h-[50%] flex justify-center items-center  " style={{
      display:'none'
   }} id = "two">
          <div className="h-auto w-auto p-10 bg-[black] border-1 border-[purple]">
       <p className="text-white text-[1.5rem]">★ ★ ★ ★ ★</p>
       <h3 className={`text-white xl:text-[1.5rem] md:text-[1.5rem] text-[1rem] ${cyberFont.className}`}>"Finally a tool that doesn't require corpo credentials. Simple, powerful, secure. My eddies are safe and tracked perfectly."</h3>
      <div className="w-full h-[20%] flex items-center justify-start">
      <div className="aspect-square max-w-[10vw] w-[7%] min-w-[50px]  bg-[rgba(204,0,255,0.32)] rounded-[100%] flex justify-center items-center m-2 text-white xl:text-[2rem] text-[1.5rem]">LR</div>
    <h3 className={`text-white xl:text-[1.3rem] text-[1rem] ${cyberFont2.className}`}>Lucia Rodriguez</h3>
    </div>
      </div>
      
      

   </div>
         <div className="z-20 w-[80%] h-[50%] flex justify-center items-center  " style={{
      display:'none'
   }} id = "tree">
          <div className="h-auto w-auto p-10 bg-[black] border-1 border-[purple]">
       <p className="text-white text-[1.5rem]">★ ★ ★ ★ ★</p>
       <h3 className={`text-white xl:text-[1.5rem] md:text-[1.5rem] text-[1rem] ${cyberFont.className}`}>"Military-grade encryption, real-time analytics, zero data leaks. Perfect for those who value privacy in this digital hellscape."</h3>
      <div className="w-full h-[20%] flex items-center justify-start">
      <div className="aspect-square max-w-[10vw] w-[7%] min-w-[50px]  bg-[rgba(204,0,255,0.32)] rounded-[100%] flex justify-center items-center m-2 text-white xl:text-[2rem] text-[1.5rem]">LR</div>
    <h3 className={`text-white xl:text-[1.3rem] text-[1rem] ${cyberFont2.className}`}>Alex Chen</h3>
    </div>
      </div>
      
      

   </div>
   <div className="flex justify-center items-center w-full h-auto gap-5">
         <button className="bg-[purple] aspect-square h-10 z-10 rounded-[100%]" onClick={(e)=>{
          const one = document.querySelector<HTMLElement>('#one')
           const two = document.querySelector<HTMLElement>('#two')
            const tree = document.querySelector<HTMLElement>('#tree')
            if(!one) return
            if(!two) return
            if(!tree) return
            one.style.display = "flex"
            two.style.display = "none"
            tree.style.display = "none"
         }}></button>
          <button onClick={(e)=>{
          const one = document.querySelector<HTMLElement>('#one')
           const two = document.querySelector<HTMLElement>('#two')
            const tree = document.querySelector<HTMLElement>('#tree')
            if(!one) return
            if(!two) return
            if(!tree) return
            one.style.display = "none"
            two.style.display = "flex"
            tree.style.display = "none"
         }} className="bg-[purple] aspect-square h-10 z-10 rounded-[100%]" ></button>
           <button className="bg-[purple] aspect-square h-10 z-10 rounded-[100%]" onClick={(e)=>{
          const one = document.querySelector<HTMLElement>('#one')
           const two = document.querySelector<HTMLElement>('#two')
            const tree = document.querySelector<HTMLElement>('#tree')
            if(!one) return
            if(!two) return
            if(!tree) return
            one.style.display = "none"
            two.style.display = "none"
            tree.style.display = "flex"
         }}></button>
           </div>
</section>
<section id="final" className="relative min-w-full min-h-screen w-full h-screen flex justify-center items-center bg-black overflow-hidden">
  {/* Відео фон */}
  <video autoPlay loop muted className="absolute w-full h-full object-cover opacity-60">
    <source src="/video/final-bg.mp4" type="video/mp4" />
  </video>

  {/* Контент */}
  <div className="z-20 flex flex-col items-center gap-8 text-center">
    <h2 className={`text-[cyan] text-[3rem] lg:text-[5rem] glitch ${cyberFont3.className}`}>
      Enter the Matrix of Finance
    </h2>
    <h3 className={`text-white text-[1.5rem] max-w-[60%] ${cyberFont2.className}`}>
      The future is yours. Control it.
    </h3>
    <button className="relative px-8 py-4 text-[1.5rem] text-white border-2 border-cyan-400 rounded-xl overflow-hidden group">
      <a className="relative z-10" onClick={(e)=>{
         if(!auth.currentUser){
         router.push('/register')
      }
      else{
          router.push('/yourmoney')
      }
      }}>Get Started</a>
      <span className="absolute inset-0 bg-cyan-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
    </button>
  </div>
</section>


   </>
  );
}
