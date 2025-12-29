import { cyberFont } from "../fonts/fonts"
import { cyberFont2 } from "../fonts/fonts"
export default function chatProps(){
    return(
                 <div className="z-20 w-[80%] h-[50%] flex justify-center items-center  " style={{
      display:'none'
   }} id = "tree">
          <div className="h-auto w-auto p-10 bg-[black] border-1 border-[purple]">
       <p className="text-white text-[1.5rem]">★ ★ ★ ★ ★</p>
       <h3 className={`text-white xl:text-[1.5rem] md:text-[1.5rem] text-[1rem] ${cyberFont.className}`}>"Military-grade encryption, real-time analytics, zero data leaks. Perfect for those who value privacy in this digital hellscape."</h3>
      <div className="w-[50%] h-[20%] flex items-center justify-start">
      <div className="aspect-square w-[30%] min-w-[50px]  bg-[rgba(204,0,255,0.32)] rounded-[100%] flex justify-center items-center m-2 text-white xl:text-[2rem] text-[1.5rem]">LR</div>
    <h3 className={`text-white xl:text-[1.3rem] text-[1rem] ${cyberFont2.className}`}>Alex Chen</h3>
    </div>
      </div>
      
      

   </div>
    )
}